import {useState, useEffect} from 'react';
import { client, urlFor } from '../sanityClient';
import Modal from "react-modal";
import { PortableText } from "@portabletext/react";

const Blog = () => {
    const [posts, setPosts] = useState([]);
    const [expanded, setExpanded] = useState({});
    const [selectedPost, setSelectedPost] = useState(null);
    
    // Helper function to generate Sanity image URLs with proper cropping
    const getSanityImageUrl = (imageAsset, width, height, mainImage = null) => {
        if (!imageAsset || !imageAsset._id) return '';
        
        // Convert Sanity image ID to proper format
        const imageId = imageAsset._id
            .replace('image-', '')
            .replace('-jpg', '.jpg')
            .replace('-png', '.png')
            .replace('-jpeg', '.jpeg')
            .replace('-webp', '.webp');
        
        let url = `https://cdn.sanity.io/images/j5dg682b/production/${imageId}`;
        
        // Add crop rectangle if crop data is available
        if (mainImage && mainImage.crop) {
            const crop = mainImage.crop;
            // Extract original dimensions from image ID
            const dimensionMatch = imageAsset._id.match(/-(\d+)x(\d+)-/);
            if (dimensionMatch) {
                const originalWidth = parseInt(dimensionMatch[1]);
                const originalHeight = parseInt(dimensionMatch[2]);
                
                // Calculate crop rectangle
                const left = Math.round(crop.left * originalWidth);
                const top = Math.round(crop.top * originalHeight);
                const right = Math.round((1 - crop.right) * originalWidth);
                const bottom = Math.round((1 - crop.bottom) * originalHeight);
                
                url += `?rect=${left},${top},${right},${bottom}`;
            }
        }
        
        // Add sizing parameters
        const separator = url.includes('?') ? '&' : '?';
        url += `${separator}w=${width}&h=${height}&fit=crop&auto=format`;
        
        return url;
    };
    
    useEffect(() => {
        client.fetch(
            `*[_type == "post"] {
            title,
            slug,
            body,
            mainImage {
                asset -> {
                    _id,
                    url
                },
                hotspot,
                crop,
                alt
            },
            alt,
            publishedAt,
            categories
            }`
        )
        .then((data) => setPosts(data))
        .catch((err) => console.error(err));
    }, []);
    
    const toggleExpand = (slug) => {
        setExpanded((prev) => ({
            ...prev,
            [slug]: !prev[slug]
        }));
    };

    Modal.setAppElement("#root");

    return (
        <section className="w-full bg-gradient-to-br from-[#e6f4ff] via-white to-[#cce6ff] py-10 px-2 sm:px-4 mt-10 rounded-2xl shadow-2xl max-w-6xl mx-auto mb-24">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-[#005baa] mb-8 sm:mb-12 drop-shadow-lg tracking-tight">Blog & Aktuelles</h2>
            {posts.length === 0 ? (
                <p className="text-center text-base sm:text-lg text-[#005baa]">Keine Beiträge gefunden.</p>
            ) : (
                <div className="grid gap-6 sm:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post) => {
                        const slug = post.slug?.current || post.title;
                        const isExpanded = expanded[slug];
                        const bodyText = Array.isArray(post.body)
                            ? post.body.map(block => block.children?.map(child => child.text).join(' ')).join('\n\n')
                            : post.body;
                        return (
                            <div
                                key={slug}
                                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center border border-[#e0eaff] overflow-hidden"
                            >
                                {post.mainImage && post.mainImage.asset && (
                                    <img
                                        src={getSanityImageUrl(post.mainImage.asset, 400, 300, post.mainImage)}
                                        alt={post.mainImage.alt || post.alt || post.title}
                                        className="w-full h-40 sm:h-48 object-cover rounded-t-2xl mb-2 sm:mb-4"
                                        loading="lazy"
                                        onLoad={() => console.log('Image loaded successfully')}
                                        onError={(e) => {
                                            console.error('Cropped image failed, trying direct URL:', e.target.src);
                                            e.target.src = post.mainImage.asset.url;
                                        }}
                                    />
                                )}
                                <div className="p-4 sm:p-6 flex flex-col flex-1 w-full">
                                    <h3 className="text-lg sm:text-xl font-bold text-[#005baa] mb-1 sm:mb-2 text-center">{post.title}</h3>
                                    {post.publishedAt && (
                                        <p className="text-xs sm:text-sm text-[#009ee0] mb-1 sm:mb-2 text-center">
                                            {new Date(post.publishedAt).toLocaleDateString('de-DE', {year: 'numeric', month: 'long', day: 'numeric'})}
                                        </p>
                                    )}
                                    {post.categories && Array.isArray(post.categories) && post.categories.length > 0 && (
                                        <div className="flex flex-wrap justify-center gap-1 sm:gap-2 mb-1 sm:mb-2">
                                            {post.categories.map((cat, idx) => (
                                                <span key={cat._id || idx} className="bg-[#e6f4ff] text-[#005baa] rounded-full px-2 sm:px-3 py-1 text-xs font-semibold border border-[#b3e0ff]">
                                                    {cat.title || cat}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                    <div className="mt-1 sm:mt-2 text-gray-700 text-sm sm:text-base text-center">
                                        <p className="whitespace-pre-line">{bodyText?.slice(0, 180)}...</p>
                                    </div>
                                    <button
                                        onClick={() => setSelectedPost(post)}
                                        className="mt-3 sm:mt-4 bg-gradient-to-r from-[#009ee0] to-[#005baa] text-white font-bold rounded-full px-4 sm:px-6 py-2 shadow hover:from-[#005baa] hover:to-[#009ee0] transition-all duration-300 text-sm sm:text-base mx-auto"
                                    >
                                        Mehr anzeigen
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
            {selectedPost && (
                <Modal
                    isOpen={true}
                    onRequestClose={() => setSelectedPost(null)}
                    className="bg-white w-full max-w-3xl mx-auto mt-10 rounded-lg shadow-xl outline-none p-4 sm:p-8 relative max-h-[90vh] overflow-y-auto animate-fadeIn"
                    overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start z-50 transition-opacity duration-500 animate-fadeIn"
                >
                    <button
                        onClick={() => setSelectedPost(null)}
                        className="absolute top-4 right-4 text-gray-500 hover:text-[#005baa] text-3xl font-bold focus:outline-none"
                        aria-label="Schliessen"
                    >
                        &times;
                    </button>
                    <div className="text-center">
                        {selectedPost.mainImage && selectedPost.mainImage.asset && (
                            <img
                                src={getSanityImageUrl(selectedPost.mainImage.asset, 800, 600, selectedPost.mainImage)}
                                alt={selectedPost.mainImage.alt || selectedPost.alt || selectedPost.title}
                                className="w-full max-h-96 object-cover rounded-lg border-4 border-white shadow-lg mx-auto mb-4 bg-white"
                                loading="lazy"
                                onError={(e) => {
                                    console.error('Modal cropped image failed, trying direct URL:', e.target.src);
                                    e.target.src = selectedPost.mainImage.asset.url;
                                }}
                            />
                        )}
                        <h2 className="text-2xl font-bold text-[#005baa] mb-2">{selectedPost.title}</h2>
                        {selectedPost.publishedAt && (
                            <p className="text-sm text-[#009ee0] mb-2">
                                {new Date(selectedPost.publishedAt).toLocaleDateString('de-DE', {year: 'numeric', month: 'long', day: 'numeric'})}
                            </p>
                        )}
                        {selectedPost.categories && Array.isArray(selectedPost.categories) && selectedPost.categories.length > 0 && (
                            <div className="flex flex-wrap justify-center gap-2 mb-2">
                                {selectedPost.categories.map((cat, idx) => (
                                    <span key={cat._id || idx} className="bg-[#e6f4ff] text-[#005baa] rounded-full px-3 py-1 text-xs font-semibold border border-[#b3e0ff]">
                                        {cat.title || cat}
                                    </span>
                                ))}
                            </div>
                        )}
                        <div className="text-left mt-6 prose prose-sm prose-gray max-w-none mx-auto">
                            {Array.isArray(selectedPost.body) ? (
                                <PortableText 
                                    value={selectedPost.body}
                                    components={{
                                        block: {
                                            normal: ({children}) => <p className="text-base leading-relaxed mb-4">{children}</p>,
                                            h1: ({children}) => <h1 className="text-3xl font-bold text-[#005baa] mb-4">{children}</h1>,
                                            h2: ({children}) => <h2 className="text-2xl font-bold text-[#005baa] mb-3">{children}</h2>,
                                            h3: ({children}) => <h3 className="text-xl font-semibold text-[#005baa] mb-2">{children}</h3>,
                                            h4: ({children}) => <h4 className="text-lg font-semibold text-[#005baa] mb-2">{children}</h4>,
                                            blockquote: ({children}) => <blockquote className="border-l-4 border-[#009ee0] pl-4 italic text-gray-700 mb-4">{children}</blockquote>,
                                            small: ({children}) => <p className="text-sm leading-relaxed mb-4">{children}</p>,
                                            large: ({children}) => <p className="text-lg leading-relaxed mb-4">{children}</p>,
                                            xlarge: ({children}) => <p className="text-xl leading-relaxed mb-4">{children}</p>,
                                        },
                                        marks: {
                                            strong: ({children}) => <strong className="font-bold">{children}</strong>,
                                            em: ({children}) => <em className="italic">{children}</em>,
                                            underline: ({children}) => <u>{children}</u>,
                                            'strike-through': ({children}) => <s>{children}</s>,
                                            link: ({children, value}) => (
                                                <a 
                                                    href={value.href} 
                                                    className="text-[#009ee0] hover:text-[#005baa] underline"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    {children}
                                                </a>
                                            ),
                                        },
                                        list: {
                                            bullet: ({children}) => <ul className="list-disc ml-6 mb-4">{children}</ul>,
                                            number: ({children}) => <ol className="list-decimal ml-6 mb-4">{children}</ol>,
                                        },
                                        listItem: {
                                            bullet: ({children}) => <li className="mb-1">{children}</li>,
                                            number: ({children}) => <li className="mb-1">{children}</li>,
                                        },
                                        types: {
                                            image: ({value}) => (
                                                <img 
                                                    src={getSanityImageUrl(value.asset, 800, 600)}
                                                    alt={value.alt || ''} 
                                                    className="w-full max-w-2xl mx-auto rounded-lg shadow-lg mb-4 object-cover"
                                                    onError={(e) => {
                                                        console.error('Content image failed, trying direct URL');
                                                        e.target.src = value.asset?.url || '';
                                                    }}
                                                />
                                            ),
                                        },
                                    }}
                                />
                            ) : (
                                <p className="text-base leading-relaxed">{selectedPost.body}</p>
                            )}
                        </div>
                    </div>
                </Modal>
            )}
        </section>
    );
}

export default Blog;
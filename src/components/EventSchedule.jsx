import { useEffect, useState } from 'react';
import { getEvents } from './getEvents';

const formatDate = (dateStr) => {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  return date.toLocaleDateString('de-CH', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
};

const EventSchedule = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getEvents()
      .then(setEvents)
      .catch((err) => console.error('Fehler beim Laden der Events:', err));
  }, []);

  return (
    <section className="bg-white text-[#002f6c] py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold tracking-tight mb-4">
            Veranstaltungsplan
          </h2>
        </div>

        <div className="divide-y divide-[#b3e0ff]">
          {events.map((event, index) => (
            <div
              key={event._id || index}
              className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6 py-4 sm:py-6"
            >
              {/* Zeit und Datum */}
              <p className="w-full sm:w-48 text-base sm:text-lg font-medium text-[#009ee0] text-center sm:text-right shrink-0">
                <span className="block sm:inline">{formatDate(event.date)}</span>{' '}
                <span className="block sm:inline">
                  {event.startTime} – {event.endTime}
                </span>
              </p>

              {/* Titel mit Link oder ohne */}
              <h3 className="text-base sm:text-lg font-semibold text-[#002f6c] text-center sm:text-left">
                {event.link ? (
                  <a
                    href={event.link}
                    className="hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {event.title}
                  </a>
                ) : (
                  event.title
                )}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventSchedule;

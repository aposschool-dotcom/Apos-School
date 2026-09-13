import React from 'react';
import { PlayCircle, Youtube, ExternalLink } from 'lucide-react';
import { FREE_YOUTUBE_PLAYLISTS, APOS_CONTACT } from '../data/aposData';

export const FreeClassesSection: React.FC = () => {
  return (
    <section id="free-classes" className="py-16 sm:py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/10 text-amber-400 text-xs font-bold border border-amber-400/20 mb-5">
            <Youtube className="w-3.5 h-3.5" />
            100% FREE — NO FEE REQUIRED
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Can't Afford The Fee? Learn The Full Course For Free
          </h2>
          <p className="text-slate-300 leading-relaxed">
            No student should be stopped by money. Both modules of this course are taught completely free,
            step by step, on our YouTube channel — <span className="text-amber-400 font-semibold">Ameer PopcornWala</span>.
            Watch below, or open the full playlist directly on YouTube.
          </p>
        </div>

        {/* Playlist Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {FREE_YOUTUBE_PLAYLISTS.map((playlist) => (
            <div
              key={playlist.id}
              className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden flex flex-col"
            >
              <div className="aspect-video w-full bg-black">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/videoseries?list=${playlist.playlistId}`}
                  title={playlist.playlistTitle}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <span className="text-amber-400 text-xs font-bold uppercase tracking-wide mb-2">
                  {playlist.moduleLabel}
                </span>
                <h3 className="text-white font-bold text-lg leading-snug mb-2">
                  {playlist.playlistTitle}
                </h3>
                <p className="text-slate-400 text-sm mb-5 flex items-center gap-1.5">
                  <PlayCircle className="w-4 h-4" />
                  {playlist.videoCount} Free Lessons In This Playlist
                </p>
                <a
                  href={`https://www.youtube.com/playlist?list=${playlist.playlistId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-amber-400 text-slate-950 font-bold text-sm hover:bg-amber-300 active:scale-95 transition-all"
                >
                  Open Full Playlist On YouTube
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-slate-500 text-sm mt-10">
          Prefer live classes, mentor feedback, real client projects, and a completion certificate?{' '}
          <a href="#fee-enrollment" className="text-amber-400 hover:text-amber-300 font-semibold">
            See the paid structured program →
          </a>
        </p>
      </div>
    </section>
  );
};

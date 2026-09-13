import React, { useState } from 'react';
import { Quote, ThumbsUp, ExternalLink } from 'lucide-react';
import { FACEBOOK_REVIEWS } from '../data/aposData';

const FACEBOOK_PAGE_URL = 'https://web.facebook.com/profile.php?id=100088101580267';
const PREVIEW_LENGTH = 240;

const ReviewCard: React.FC<{ review: (typeof FACEBOOK_REVIEWS)[number] }> = ({ review }) => {
  const [expanded, setExpanded] = useState(false);
  const isLong = review.text.length > PREVIEW_LENGTH;
  const displayText = expanded || !isLong ? review.text : review.text.slice(0, PREVIEW_LENGTH).trim() + '…';

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col h-full shadow-sm">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center font-bold text-sm shrink-0">
          {review.name.charAt(0)}
        </div>
        <div className="min-w-0">
          <div className="font-bold text-slate-900 text-sm truncate">{review.name}</div>
          <div className="text-xs text-slate-500 flex items-center gap-1">
            <ThumbsUp className="w-3 h-3 text-blue-600 fill-blue-600" />
            recommends APOS &middot; {review.date}
          </div>
        </div>
      </div>

      {review.batch && (
        <span className="inline-block mb-3 px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 text-[11px] font-semibold w-fit">
          {review.batch}
        </span>
      )}

      <Quote className="w-5 h-5 text-amber-300 mb-2" />

      <p
        className="text-slate-700 text-sm leading-relaxed flex-1"
        dir="auto"
      >
        {displayText}
      </p>

      {isLong && (
        <button
          onClick={() => setExpanded((v) => !v)}
          className="mt-3 text-amber-600 hover:text-amber-700 text-xs font-bold self-start"
        >
          {expanded ? 'Show Less' : 'Read Full Review'}
        </button>
      )}
    </div>
  );
};

export const FacebookReviewsSection: React.FC = () => {
  return (
    <section id="facebook-reviews" className="py-16 sm:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold border border-blue-200 mb-5">
            <ThumbsUp className="w-3.5 h-3.5 fill-blue-700" />
            REAL REVIEWS FROM OUR FACEBOOK PAGE
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            What Our Students Are Saying
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Nearly 100 students have left reviews recommending APOS School on Facebook.
            Here's a selection, straight from our page, in their own words.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FACEBOOK_REVIEWS.map((review, i) => (
            <ReviewCard key={i} review={review} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href={FACEBOOK_PAGE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-blue-600 text-white hover:bg-blue-700 active:scale-95 transition-all"
          >
            See All Reviews On Facebook
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

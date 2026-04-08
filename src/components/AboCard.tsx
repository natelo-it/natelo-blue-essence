import { Check, Info, Globe, Plus } from "lucide-react";

export interface AboCardProps {
  provider: "Sunrise" | "Salt" | "Yallo" | "Lebara";
  planName: string;
  has5G: boolean;
  premiumDealBadge?: string;
  discountBadge?: string;
  switzerlandFeatures: string[];
  abroadFeatures: string[];
  highlights: string[];
  price: string;
  oldPrice?: string;
  priceSubtext?: string; // e.g. "/Mt."
  percentageBadge?: string;
  details: string[];
}

const providerBranding = {
  Sunrise: {
    color: "#E4002B",
    logoColor: "text-[#E4002B]",
    buttonColor: "bg-[#E4002B] hover:bg-[#c90025]",
    highlightBg: "bg-[#E4002B]/10",
  },
  Salt: {
    color: "#000000",
    logoColor: "text-black",
    buttonColor: "bg-black hover:bg-black/90",
    highlightBg: "bg-black/5",
  },
  Yallo: {
    color: "#00A651",
    logoColor: "text-[#00A651]",
    buttonColor: "bg-[#00A651] hover:bg-[#008a43]",
    highlightBg: "bg-[#00A651]/10",
  },
  Lebara: {
    color: "#0052cc",
    logoColor: "text-[#0052cc]",
    buttonColor: "bg-[#0052cc] hover:bg-[#0042a3]",
    highlightBg: "bg-[#0052cc]/10",
  },
};

const AboCard = ({
  provider,
  planName,
  has5G,
  premiumDealBadge,
  discountBadge,
  switzerlandFeatures,
  abroadFeatures,
  highlights,
  price,
  oldPrice,
  priceSubtext = "/Mt.",
  percentageBadge,
  details,
}: AboCardProps) => {
  const brand = providerBranding[provider];

  return (
    <div className="relative flex flex-col h-full w-[320px] bg-white rounded-[24px] border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 font-sans snap-start overflow-hidden flex-shrink-0">
      
      {/* Top Banner Area (Always rendered to align heights) */}
      <div className={`w-full text-xs font-bold text-center py-1.5 flex items-center justify-center gap-2 ${premiumDealBadge ? 'bg-black text-white' : 'bg-transparent text-transparent select-none'}`}>
        {premiumDealBadge || "Placeholder"}
      </div>

      <div className="p-5 flex flex-col flex-1">
        
        {/* Header: Provider & Discount Badge */}
        <div className="flex justify-between items-start mb-6">
          <div className="flex flex-col">
            <span className={`font-bold text-2xl tracking-tighter ${brand.logoColor}`}>
              {provider.toUpperCase()}
            </span>
            <div className="flex items-center gap-2 mt-1">
              <span className="font-semibold text-gray-800 text-lg leading-none">{planName}</span>
              {has5G && (
                <span className="px-1.5 py-0.5 border border-red-500 text-red-500 rounded text-[10px] font-bold">
                  5G
                </span>
              )}
            </div>
          </div>
          {discountBadge && (
            <span className="bg-red-500 text-white text-[10px] font-semibold px-2 py-0.5 rounded-sm">
              {discountBadge}
            </span>
          )}
        </div>

        {/* Features: In Switzerland */}
        <div className="mb-4">
          <div className="flex items-center gap-1.5 mb-2">
            <div className="w-4 h-4 bg-red-500 rounded-sm flex items-center justify-center">
              <Plus className="w-3 h-3 text-white" strokeWidth={3} />
            </div>
            <span className="text-xs font-semibold text-gray-600">In Switzerland</span>
          </div>
          <ul className="space-y-2">
            {switzerlandFeatures.map((feature, i) => (
              <li key={i} className="flex items-start gap-2 text-[13px] text-gray-600 leading-tight">
                <Check className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${brand.logoColor}`} strokeWidth={2.5} />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Features: Abroad */}
        {abroadFeatures.length > 0 && (
          <div className="mb-6 pt-4 border-t border-gray-100">
            <div className="flex items-center gap-1.5 mb-2">
              <Globe className="w-4 h-4 text-gray-600" />
              <span className="text-xs font-semibold text-gray-600">When abroad</span>
            </div>
            <ul className="space-y-2">
              {abroadFeatures.map((feature, i) => (
                <li key={i} className="flex items-start gap-2 text-[13px] text-gray-600 leading-tight">
                  <Check className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${brand.logoColor}`} strokeWidth={2.5} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Push bottom section down */}
        <div className="mt-auto">
          {/* Highlights Bar */}
          {highlights.length > 0 && (
            <div className={`flex items-center justify-between px-3 py-1.5 ${brand.highlightBg} rounded-md mb-6`}>
              {highlights.map((h, i) => (
                <span key={i} className="text-[11px] font-medium text-gray-700">
                  {h}
                </span>
              ))}
            </div>
          )}

          {/* Pricing Row */}
          <div className="flex items-end justify-between mb-5">
            <div className="flex items-start gap-1">
              <span className={`text-[12px] font-bold mt-1.5 ${brand.logoColor}`}>CHF</span>
              <span className={`text-[42px] leading-none font-bold tracking-tighter ${brand.logoColor}`}>
                {price}
              </span>
            </div>

            <div className="flex flex-col items-end pb-1">
              {percentageBadge && (
                <span className="bg-red-500 text-white text-[11px] font-bold px-1.5 py-0.5 rounded-sm mb-1">
                  {percentageBadge}
                </span>
              )}
              {oldPrice && (
                <div className="flex items-center gap-1 text-[11px]">
                  <span className="text-gray-400 line-through font-medium">{oldPrice}</span>
                  <span className="text-gray-500">{priceSubtext}</span>
                </div>
              )}
            </div>
          </div>

          {/* CTA Button */}
          <button className={`w-full py-3.5 text-white font-semibold rounded-full text-[15px] transition-colors ${brand.buttonColor}`}>
            Order now
          </button>

          {/* Bottom Details */}
          <div className="mt-4 flex flex-col items-center gap-1 text-[10px] text-gray-500 text-center">
            <div className="flex items-center gap-1 font-medium">
              <Info className="w-3 h-3" /> Details
            </div>
            {details.map((desc, i) => (
              <span key={i}>{desc}</span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboCard;

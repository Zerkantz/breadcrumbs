import RightArrowImg from "./assets/right-icon.png";

export default function Breadcrumb({ sizeFilter, colorFilter }) {
    return (
        <div className="w-full max-w-5xl mb-6">
            <div className="inline-flex items-center gap-1 bg-white border border-orange-100 rounded-full px-5 py-2.5 shadow-sm">

                <span className="text-sm font-medium text-orange-900">🐾 All dogs</span>

                {sizeFilter && (
                    <span className="breadcrumb-item flex items-center gap-1">
                        <img src={RightArrowImg} className="w-3.5 h-3.5 opacity-40" alt="" />
                        <span className="text-sm font-medium bg-orange-100 text-orange-800 px-3 py-1 rounded-full capitalize">
                            Size: {sizeFilter}
                        </span>
                    </span>
                )}

                {colorFilter && (
                    <span className="breadcrumb-item flex items-center gap-1">
                        <img src={RightArrowImg} className="w-3.5 h-3.5 opacity-40" alt="" />
                        <span className="text-sm font-medium bg-orange-100 text-orange-800 px-3 py-1 rounded-full capitalize">
                            Color: {colorFilter}
                        </span>
                    </span>
                )}
            </div>
        </div>
    );
}
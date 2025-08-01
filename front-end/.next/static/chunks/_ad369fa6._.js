(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/data/mockData.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// Demo data for development and testing
__turbopack_context__.s({
    "mockCampaigns": (()=>mockCampaigns),
    "mockDonations": (()=>mockDonations),
    "mockStats": (()=>mockStats)
});
const mockCampaigns = [
    {
        id: 1,
        title: "Help Flood Victims in Local Community",
        description: "Supporting families affected by recent flooding with emergency supplies, temporary housing, and rebuilding assistance. Every donation helps provide immediate relief and long-term recovery support.",
        targetAmount: 100,
        currentAmount: 67.5,
        creator: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM",
        endBlock: 150000,
        isActive: true,
        createdAt: 145000
    },
    {
        id: 2,
        title: "Education Fund for Underprivileged Children",
        description: "Providing school supplies, uniforms, and educational resources to children from low-income families. Your contribution helps break the cycle of poverty through education.",
        targetAmount: 250,
        currentAmount: 180.25,
        creator: "ST2CY5V39NHDPWSXMW9QDT3HC3GD6Q6XX4CFRK9H",
        endBlock: 148000,
        isActive: true,
        createdAt: 142000
    },
    {
        id: 3,
        title: "Animal Shelter Emergency Fund",
        description: "Our local animal shelter needs urgent support for medical care, food, and shelter improvements. Help us save and care for abandoned and injured animals in our community.",
        targetAmount: 75,
        currentAmount: 75,
        creator: "ST3NBRSFKX28FQ2ZJ1MAKX58HKHSDGNV5N7R21XCP",
        endBlock: 140000,
        isActive: false,
        createdAt: 135000
    },
    {
        id: 4,
        title: "Clean Water Initiative",
        description: "Building wells and water purification systems in rural areas lacking access to clean water. This project will provide safe drinking water to over 500 families.",
        targetAmount: 500,
        currentAmount: 125.75,
        creator: "ST1SJ3DTE5DN7X54YDH5D64R3BCB6A2AG2ZQ8YPD5",
        endBlock: 155000,
        isActive: true,
        createdAt: 147000
    },
    {
        id: 5,
        title: "Medical Equipment for Rural Clinic",
        description: "Purchasing essential medical equipment for a rural clinic serving remote communities. This includes diagnostic tools, emergency equipment, and basic medical supplies.",
        targetAmount: 300,
        currentAmount: 45.5,
        creator: "ST2REHHS5J3CERCRBEPMGH7921Q6PYKAADT7JP2VB",
        endBlock: 152000,
        isActive: true,
        createdAt: 146000
    }
];
const mockDonations = [
    {
        id: 1,
        campaignId: 1,
        donor: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM",
        amount: 25,
        message: "Hope this helps those in need!",
        blockHeight: 145100,
        timestamp: 145100
    },
    {
        id: 2,
        campaignId: 1,
        donor: "ST2CY5V39NHDPWSXMW9QDT3HC3GD6Q6XX4CFRK9H",
        amount: 42.5,
        message: "Praying for the affected families.",
        blockHeight: 145200,
        timestamp: 145200
    },
    {
        id: 3,
        campaignId: 2,
        donor: "ST3NBRSFKX28FQ2ZJ1MAKX58HKHSDGNV5N7R21XCP",
        amount: 100,
        message: "Education is the key to a better future!",
        blockHeight: 143000,
        timestamp: 143000
    },
    {
        id: 4,
        campaignId: 2,
        donor: "ST1SJ3DTE5DN7X54YDH5D64R3BCB6A2AG2ZQ8YPD5",
        amount: 80.25,
        message: undefined,
        blockHeight: 144500,
        timestamp: 144500
    },
    {
        id: 5,
        campaignId: 4,
        donor: "ST2REHHS5J3CERCRBEPMGH7921Q6PYKAADT7JP2VB",
        amount: 125.75,
        message: "Clean water is a basic human right.",
        blockHeight: 148000,
        timestamp: 148000
    }
];
const mockStats = {
    totalCampaigns: 5,
    totalDonations: 15,
    totalRaised: 493.75,
    activeCampaigns: 4
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/services/contractService.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "contractService": (()=>contractService)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$network$2f$dist$2f$esm$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stacks/network/dist/esm/network.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$clarityValue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stacks/transactions/dist/esm/clarity/clarityValue.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$fetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stacks/transactions/dist/esm/fetch.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/mockData.ts [app-client] (ecmascript)");
;
;
;
// Environment configuration using Hiro API
const getNetwork = ()=>{
    const networkType = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_STACKS_NETWORK || 'testnet';
    if (networkType === 'mainnet') {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$network$2f$dist$2f$esm$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STACKS_MAINNET"];
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$network$2f$dist$2f$esm$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STACKS_TESTNET"];
};
const network = getNetwork();
const CONTRACT_ADDRESS = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_CONTRACT_ADDRESS || 'ST3AM1A56AK2C1XAFJ4115ZSV26EB49BVQ10MGCS0';
const DONATION_CONTRACT_NAME = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_DONATION_CONTRACT_NAME || 'donation-tracker-v2';
const REWARDS_CONTRACT_NAME = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_REWARDS_CONTRACT_NAME || 'donation-rewards-v2';
const HIRO_API_KEY = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_PLATFORM_HIRO_API_KEY;
// Flag to use mock data when contracts aren't deployed
const USE_MOCK_DATA = true; // Set to false when contracts are deployed and working
class ContractService {
    apiUrl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_STACKS_API_URL || 'https://api.testnet.hiro.so';
    // Hiro API helper functions
    async makeHiroApiCall(endpoint) {
        const headers = {
            'Content-Type': 'application/json'
        };
        if (HIRO_API_KEY) {
            headers['Authorization'] = `Bearer ${HIRO_API_KEY}`;
        }
        const response = await fetch(`${this.apiUrl}${endpoint}`, {
            method: 'GET',
            headers
        });
        if (!response.ok) {
            throw new Error(`Hiro API call failed: ${response.statusText}`);
        }
        return response.json();
    }
    async fetchContractData(functionName, functionArgs = []) {
        try {
            // Use direct contract call with Hiro API
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$fetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchCallReadOnlyFunction"])({
                contractAddress: CONTRACT_ADDRESS,
                contractName: DONATION_CONTRACT_NAME,
                functionName,
                functionArgs,
                network,
                senderAddress: CONTRACT_ADDRESS
            });
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$clarityValue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cvToJSON"])(result);
        } catch (error) {
            console.error(`Error calling ${functionName}:`, error);
            // If contract call fails, fall back to mock data for development
            console.log('Falling back to mock data due to contract error');
            return null;
        }
    }
    // Campaign-related functions
    async getCampaign(campaignId) {
        if ("TURBOPACK compile-time truthy", 1) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockCampaigns"].find((c)=>c.id === campaignId) || null;
        }
        "TURBOPACK unreachable";
    }
    async getTotalCampaigns() {
        if ("TURBOPACK compile-time truthy", 1) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockCampaigns"].length;
        }
        "TURBOPACK unreachable";
    }
    async getTotalDonations() {
        if ("TURBOPACK compile-time truthy", 1) {
            // Calculate total donations from mock data
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockCampaigns"].reduce((total, campaign)=>{
                return total + Math.ceil(campaign.currentAmount / 5);
            }, 0);
        }
        "TURBOPACK unreachable";
    }
    async getAllCampaigns() {
        if ("TURBOPACK compile-time truthy", 1) {
            return [
                ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockCampaigns"]
            ];
        }
        "TURBOPACK unreachable";
    }
}
const contractService = new ContractService();
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/campaign/[id]/donate/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>DonatePage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$WalletContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/WalletContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$contractService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/contractService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function DonatePage() {
    _s();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { isConnected, userData, donateToCampaign } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$WalletContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWallet"])();
    const [campaign, setCampaign] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [donating, setDonating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [success, setSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Form state
    const [amount, setAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const campaignId = parseInt(params.id, 10);
    // Early return for invalid campaign ID
    if (!params.id || isNaN(campaignId) || campaignId <= 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gray-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 py-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-2xl mx-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-lg shadow-md p-8 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                className: "w-16 h-16 text-red-500 mx-auto mb-4"
                            }, void 0, false, {
                                fileName: "[project]/src/app/campaign/[id]/donate/page.tsx",
                                lineNumber: 34,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-2xl font-bold text-gray-900 mb-2",
                                children: "Invalid Campaign"
                            }, void 0, false, {
                                fileName: "[project]/src/app/campaign/[id]/donate/page.tsx",
                                lineNumber: 35,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600 mb-6",
                                children: [
                                    'The campaign ID "',
                                    params.id,
                                    '" is not valid.'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/campaign/[id]/donate/page.tsx",
                                lineNumber: 36,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "btn-primary",
                                children: "Back to Campaigns"
                            }, void 0, false, {
                                fileName: "[project]/src/app/campaign/[id]/donate/page.tsx",
                                lineNumber: 37,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/campaign/[id]/donate/page.tsx",
                        lineNumber: 33,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/campaign/[id]/donate/page.tsx",
                    lineNumber: 32,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/campaign/[id]/donate/page.tsx",
                lineNumber: 31,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/campaign/[id]/donate/page.tsx",
            lineNumber: 30,
            columnNumber: 7
        }, this);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DonatePage.useEffect": ()=>{
            // Add a small delay to ensure proper hydration
            const timer = setTimeout({
                "DonatePage.useEffect.timer": ()=>{
                    setMounted(true);
                }
            }["DonatePage.useEffect.timer"], 100);
            return ({
                "DonatePage.useEffect": ()=>clearTimeout(timer)
            })["DonatePage.useEffect"];
        }
    }["DonatePage.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DonatePage.useEffect": ()=>{
            if (mounted) {
                fetchCampaign();
            }
        }
    }["DonatePage.useEffect"], [
        mounted
    ]);
    // Add a fallback effect that doesn't depend on campaignId to avoid infinite loops
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DonatePage.useEffect": ()=>{
            if (mounted && !campaign && !loading && !error) {
                fetchCampaign();
            }
        }
    }["DonatePage.useEffect"], [
        mounted,
        campaign,
        loading,
        error
    ]);
    const fetchCampaign = async ()=>{
        try {
            setLoading(true);
            setError(null);
            const campaignData = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$contractService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contractService"].getCampaign(campaignId);
            if (!campaignData) {
                setError('Campaign not found');
                return;
            }
            setCampaign(campaignData);
        } catch (err) {
            console.error('Error fetching campaign:', err);
            setError('Failed to load campaign details');
        } finally{
            setLoading(false);
        }
    };
    const handleDonate = async (e)=>{
        e.preventDefault();
        if (!isConnected || !campaign || !donateToCampaign) {
            setError('Please connect your wallet first');
            return;
        }
        if (!amount || parseFloat(amount) <= 0) {
            setError('Please enter a valid donation amount');
            return;
        }
        try {
            setDonating(true);
            setError(null);
            await donateToCampaign(campaign.id, parseFloat(amount), message || undefined);
            setSuccess(true);
            setAmount('');
            setMessage('');
            // Refresh campaign data
            fetchCampaign();
            // Redirect to campaign page after 3 seconds
            setTimeout(()=>{
                router.push(`/campaign/${campaignId}`);
            }, 3000);
        } catch (err) {
            console.error('Donation failed:', err);
            setError(err.message || 'Donation failed. Please try again.');
        } finally{
            setDonating(false);
        }
    };
    const formatAmount = (amount)=>{
        return new Intl.NumberFormat('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 6
        }).format(amount);
    };
    const progressPercentage = campaign ? Math.min(campaign.currentAmount / campaign.targetAmount * 100, 100) : 0;
    if (!mounted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gray-50 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"
                    }, void 0, false, {
                        fileName: "[project]/src/app/campaign/[id]/donate/page.tsx",
                        lineNumber: 144,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600",
                        children: "Initializing..."
                    }, void 0, false, {
                        fileName: "[project]/src/app/campaign/[id]/donate/page.tsx",
                        lineNumber: 145,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/campaign/[id]/donate/page.tsx",
                lineNumber: 143,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/campaign/[id]/donate/page.tsx",
            lineNumber: 142,
            columnNumber: 7
        }, this);
    }
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gray-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 py-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-2xl mx-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-lg shadow-md p-8 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"
                            }, void 0, false, {
                                fileName: "[project]/src/app/campaign/[id]/donate/page.tsx",
                                lineNumber: 157,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-semibold text-gray-900 mb-2",
                                children: "Loading Campaign"
                            }, void 0, false, {
                                fileName: "[project]/src/app/campaign/[id]/donate/page.tsx",
                                lineNumber: 158,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600",
                                children: "Please wait while we load the campaign details..."
                            }, void 0, false, {
                                fileName: "[project]/src/app/campaign/[id]/donate/page.tsx",
                                lineNumber: 159,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-500 mt-2",
                                children: [
                                    "Campaign ID: ",
                                    campaignId
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/campaign/[id]/donate/page.tsx",
                                lineNumber: 160,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/campaign/[id]/donate/page.tsx",
                        lineNumber: 156,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/campaign/[id]/donate/page.tsx",
                    lineNumber: 155,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/campaign/[id]/donate/page.tsx",
                lineNumber: 154,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/campaign/[id]/donate/page.tsx",
            lineNumber: 153,
            columnNumber: 7
        }, this);
    }
    if (error && !campaign) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gray-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 py-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "inline-flex items-center text-blue-600 hover:text-blue-800 mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                className: "w-4 h-4 mr-2"
                            }, void 0, false, {
                                fileName: "[project]/src/app/campaign/[id]/donate/page.tsx",
                                lineNumber: 173,
                                columnNumber: 13
                            }, this),
                            "Back to Campaigns"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/campaign/[id]/donate/page.tsx",
                        lineNumber: 172,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-lg shadow-md p-8 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                className: "w-16 h-16 text-red-500 mx-auto mb-4"
                            }, void 0, false, {
                                fileName: "[project]/src/app/campaign/[id]/donate/page.tsx",
                                lineNumber: 178,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-2xl font-bold text-gray-900 mb-2",
                                children: "Error"
                            }, void 0, false, {
                                fileName: "[project]/src/app/campaign/[id]/donate/page.tsx",
                                lineNumber: 179,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600 mb-6",
                                children: error
                            }, void 0, false, {
                                fileName: "[project]/src/app/campaign/[id]/donate/page.tsx",
                                lineNumber: 180,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "btn-primary",
                                children: "View All Campaigns"
                            }, void 0, false, {
                                fileName: "[project]/src/app/campaign/[id]/donate/page.tsx",
                                lineNumber: 181,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/campaign/[id]/donate/page.tsx",
                        lineNumber: 177,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/campaign/[id]/donate/page.tsx",
                lineNumber: 171,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/campaign/[id]/donate/page.tsx",
            lineNumber: 170,
            columnNumber: 7
        }, this);
    }
    if (success) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gray-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 py-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-md mx-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-lg shadow-md p-8 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                className: "w-16 h-16 text-green-500 mx-auto mb-4"
                            }, void 0, false, {
                                fileName: "[project]/src/app/campaign/[id]/donate/page.tsx",
                                lineNumber: 196,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-2xl font-bold text-gray-900 mb-2",
                                children: "Donation Successful!"
                            }, void 0, false, {
                                fileName: "[project]/src/app/campaign/[id]/donate/page.tsx",
                                lineNumber: 197,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600 mb-6",
                                children: [
                                    'Thank you for your generous donation to "',
                                    campaign?.title,
                                    '". Your contribution will make a real difference!'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/campaign/[id]/donate/page.tsx",
                                lineNumber: 200,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm text-gray-500 mb-6",
                                children: "Redirecting to campaign page in 3 seconds..."
                            }, void 0, false, {
                                fileName: "[project]/src/app/campaign/[id]/donate/page.tsx",
                                lineNumber: 204,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: `/campaign/${campaignId}`,
                                className: "btn-primary",
                                children: "View Campaign"
                            }, void 0, false, {
                                fileName: "[project]/src/app/campaign/[id]/donate/page.tsx",
                                lineNumber: 207,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/campaign/[id]/donate/page.tsx",
                        lineNumber: 195,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/campaign/[id]/donate/page.tsx",
                    lineNumber: 194,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/campaign/[id]/donate/page.tsx",
                lineNumber: 193,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/campaign/[id]/donate/page.tsx",
            lineNumber: 192,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 py-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center mb-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: `/campaign/${campaignId}`,
                        className: "inline-flex items-center text-blue-600 hover:text-blue-800",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                className: "w-4 h-4 mr-2"
                            }, void 0, false, {
                                fileName: "[project]/src/app/campaign/[id]/donate/page.tsx",
                                lineNumber: 229,
                                columnNumber: 13
                            }, this),
                            "Back to Campaign"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/campaign/[id]/donate/page.tsx",
                        lineNumber: 225,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/campaign/[id]/donate/page.tsx",
                    lineNumber: 224,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-2xl mx-auto",
                    children: [
                        campaign && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-lg shadow-md p-6 mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-2xl font-bold text-gray-900 mb-4",
                                    children: [
                                        "Donate to: ",
                                        campaign.title
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/campaign/[id]/donate/page.tsx",
                                    lineNumber: 238,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between items-center mb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-medium text-gray-700",
                                                    children: "Campaign Progress"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/campaign/[id]/donate/page.tsx",
                                                    lineNumber: 245,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm text-gray-600",
                                                    children: [
                                                        progressPercentage.toFixed(1),
                                                        "%"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/campaign/[id]/donate/page.tsx",
                                                    lineNumber: 246,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/campaign/[id]/donate/page.tsx",
                                            lineNumber: 244,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full bg-gray-200 rounded-full h-3",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-blue-600 h-3 rounded-full transition-all duration-300",
                                                style: {
                                                    width: `${progressPercentage}%`
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/campaign/[id]/donate/page.tsx",
                                                lineNumber: 251,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/campaign/[id]/donate/page.tsx",
                                            lineNumber: 250,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/campaign/[id]/donate/page.tsx",
                                    lineNumber: 243,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-4 text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-lg font-bold text-gray-900",
                                                    children: [
                                                        formatAmount(campaign.currentAmount),
                                                        " STX"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/campaign/[id]/donate/page.tsx",
                                                    lineNumber: 260,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm text-gray-600",
                                                    children: "Raised"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/campaign/[id]/donate/page.tsx",
                                                    lineNumber: 263,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/campaign/[id]/donate/page.tsx",
                                            lineNumber: 259,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-lg font-bold text-gray-900",
                                                    children: [
                                                        formatAmount(campaign.targetAmount),
                                                        " STX"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/campaign/[id]/donate/page.tsx",
                                                    lineNumber: 266,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm text-gray-600",
                                                    children: "Goal"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/campaign/[id]/donate/page.tsx",
                                                    lineNumber: 269,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/campaign/[id]/donate/page.tsx",
                                            lineNumber: 265,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/campaign/[id]/donate/page.tsx",
                                    lineNumber: 258,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/campaign/[id]/donate/page.tsx",
                            lineNumber: 237,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-lg shadow-md p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-bold text-gray-900 mb-6",
                                    children: "Make a Donation"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/campaign/[id]/donate/page.tsx",
                                    lineNumber: 277,
                                    columnNumber: 13
                                }, this),
                                !isConnected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center py-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                            className: "w-12 h-12 text-gray-400 mx-auto mb-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/campaign/[id]/donate/page.tsx",
                                            lineNumber: 281,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-medium text-gray-900 mb-2",
                                            children: "Connect Your Wallet"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/campaign/[id]/donate/page.tsx",
                                            lineNumber: 282,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-600 mb-6",
                                            children: "Please connect your Stacks wallet to make a donation"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/campaign/[id]/donate/page.tsx",
                                            lineNumber: 285,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "btn-primary",
                                            children: "Connect Wallet"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/campaign/[id]/donate/page.tsx",
                                            lineNumber: 288,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/campaign/[id]/donate/page.tsx",
                                    lineNumber: 280,
                                    columnNumber: 15
                                }, this) : !campaign?.isActive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center py-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                            className: "w-12 h-12 text-gray-400 mx-auto mb-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/campaign/[id]/donate/page.tsx",
                                            lineNumber: 294,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-medium text-gray-900 mb-2",
                                            children: "Campaign Ended"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/campaign/[id]/donate/page.tsx",
                                            lineNumber: 295,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-600",
                                            children: "This campaign is no longer accepting donations."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/campaign/[id]/donate/page.tsx",
                                            lineNumber: 298,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/campaign/[id]/donate/page.tsx",
                                    lineNumber: 293,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    onSubmit: handleDonate,
                                    className: "space-y-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "amount",
                                                    className: "block text-sm font-medium text-gray-700 mb-2",
                                                    children: "Donation Amount (STX) *"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/campaign/[id]/donate/page.tsx",
                                                    lineNumber: 306,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    id: "amount",
                                                    step: "0.000001",
                                                    min: "0.000001",
                                                    value: amount,
                                                    onChange: (e)=>setAmount(e.target.value),
                                                    className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                                                    placeholder: "Enter amount in STX",
                                                    required: true
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/campaign/[id]/donate/page.tsx",
                                                    lineNumber: 309,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/campaign/[id]/donate/page.tsx",
                                            lineNumber: 305,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "message",
                                                    className: "block text-sm font-medium text-gray-700 mb-2",
                                                    children: "Message (Optional)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/campaign/[id]/donate/page.tsx",
                                                    lineNumber: 324,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    id: "message",
                                                    rows: 3,
                                                    value: message,
                                                    onChange: (e)=>setMessage(e.target.value),
                                                    className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                                                    placeholder: "Leave a message for the campaign creator..."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/campaign/[id]/donate/page.tsx",
                                                    lineNumber: 327,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/campaign/[id]/donate/page.tsx",
                                            lineNumber: 323,
                                            columnNumber: 17
                                        }, this),
                                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-red-50 border border-red-200 rounded-lg p-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                        className: "w-5 h-5 text-red-400 mr-2 mt-0.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/campaign/[id]/donate/page.tsx",
                                                        lineNumber: 341,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-red-700 text-sm",
                                                        children: error
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/campaign/[id]/donate/page.tsx",
                                                        lineNumber: 342,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/campaign/[id]/donate/page.tsx",
                                                lineNumber: 340,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/campaign/[id]/donate/page.tsx",
                                            lineNumber: 339,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            disabled: donating || !amount,
                                            className: "w-full flex items-center justify-center btn-primary disabled:bg-gray-400 disabled:cursor-not-allowed",
                                            children: donating ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                        className: "w-5 h-5 mr-2 animate-spin"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/campaign/[id]/donate/page.tsx",
                                                        lineNumber: 355,
                                                        columnNumber: 23
                                                    }, this),
                                                    "Processing Donation..."
                                                ]
                                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                                        className: "w-5 h-5 mr-2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/campaign/[id]/donate/page.tsx",
                                                        lineNumber: 360,
                                                        columnNumber: 23
                                                    }, this),
                                                    "Donate ",
                                                    amount ? `${amount} STX` : ''
                                                ]
                                            }, void 0, true)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/campaign/[id]/donate/page.tsx",
                                            lineNumber: 348,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/campaign/[id]/donate/page.tsx",
                                    lineNumber: 303,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/campaign/[id]/donate/page.tsx",
                            lineNumber: 276,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-blue-50 rounded-lg p-4 mt-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-sm font-medium text-blue-900 mb-2",
                                    children: "About Blockchain Donations"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/campaign/[id]/donate/page.tsx",
                                    lineNumber: 371,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-blue-700",
                                    children: "Your donation will be recorded permanently on the Stacks blockchain, ensuring complete transparency and accountability. Transaction fees may apply."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/campaign/[id]/donate/page.tsx",
                                    lineNumber: 374,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/campaign/[id]/donate/page.tsx",
                            lineNumber: 370,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/campaign/[id]/donate/page.tsx",
                    lineNumber: 234,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/campaign/[id]/donate/page.tsx",
            lineNumber: 222,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/campaign/[id]/donate/page.tsx",
        lineNumber: 221,
        columnNumber: 5
    }, this);
}
_s(DonatePage, "xgPF0q/z/SFR0WexachFHjXOZBE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$WalletContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWallet"]
    ];
});
_c = DonatePage;
var _c;
__turbopack_context__.k.register(_c, "DonatePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}}),
"[project]/node_modules/@stacks/transactions/dist/esm/clarity/clarityValue.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "cvToJSON": (()=>cvToJSON),
    "cvToString": (()=>cvToString),
    "cvToValue": (()=>cvToValue),
    "getCVTypeString": (()=>getCVTypeString),
    "isClarityType": (()=>isClarityType)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stacks/transactions/dist/esm/clarity/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$common$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stacks/common/dist/esm/utils.js [app-client] (ecmascript)");
;
;
function cvToString(val, encoding = 'hex') {
    switch(val.type){
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClarityType"].BoolTrue:
            return 'true';
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClarityType"].BoolFalse:
            return 'false';
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClarityType"].Int:
            return val.value.toString();
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClarityType"].UInt:
            return `u${val.value.toString()}`;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClarityType"].Buffer:
            if (encoding === 'tryAscii') {
                const str = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$common$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bytesToAscii"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$common$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToBytes"])(val.value));
                if (/[ -~]/.test(str)) {
                    return JSON.stringify(str);
                }
            }
            return `0x${val.value}`;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClarityType"].OptionalNone:
            return 'none';
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClarityType"].OptionalSome:
            return `(some ${cvToString(val.value, encoding)})`;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClarityType"].ResponseErr:
            return `(err ${cvToString(val.value, encoding)})`;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClarityType"].ResponseOk:
            return `(ok ${cvToString(val.value, encoding)})`;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClarityType"].PrincipalStandard:
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClarityType"].PrincipalContract:
            return val.value;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClarityType"].List:
            return `(list ${val.value.map((v)=>cvToString(v, encoding)).join(' ')})`;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClarityType"].Tuple:
            return `(tuple ${Object.keys(val.value).map((key)=>`(${key} ${cvToString(val.value[key], encoding)})`).join(' ')})`;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClarityType"].StringASCII:
            return `"${val.value}"`;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClarityType"].StringUTF8:
            return `u"${val.value}"`;
    }
}
function cvToValue(val, strictJsonCompat = false) {
    switch(val.type){
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClarityType"].BoolTrue:
            return true;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClarityType"].BoolFalse:
            return false;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClarityType"].Int:
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClarityType"].UInt:
            if (strictJsonCompat) {
                return val.value.toString();
            }
            return val.value;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClarityType"].Buffer:
            return `0x${val.value}`;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClarityType"].OptionalNone:
            return null;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClarityType"].OptionalSome:
            return cvToJSON(val.value);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClarityType"].ResponseErr:
            return cvToJSON(val.value);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClarityType"].ResponseOk:
            return cvToJSON(val.value);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClarityType"].PrincipalStandard:
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClarityType"].PrincipalContract:
            return val.value;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClarityType"].List:
            return val.value.map((v)=>cvToJSON(v));
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClarityType"].Tuple:
            const result = {};
            Object.keys(val.value).forEach((key)=>{
                result[key] = cvToJSON(val.value[key]);
            });
            return result;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClarityType"].StringASCII:
            return val.value;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClarityType"].StringUTF8:
            return val.value;
    }
}
function cvToJSON(val) {
    switch(val.type){
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClarityType"].ResponseErr:
            return {
                type: getCVTypeString(val),
                value: cvToValue(val, true),
                success: false
            };
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClarityType"].ResponseOk:
            return {
                type: getCVTypeString(val),
                value: cvToValue(val, true),
                success: true
            };
        default:
            return {
                type: getCVTypeString(val),
                value: cvToValue(val, true)
            };
    }
}
function getCVTypeString(val) {
    switch(val.type){
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClarityType"].BoolTrue:
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClarityType"].BoolFalse:
            return 'bool';
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClarityType"].Int:
            return 'int';
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClarityType"].UInt:
            return 'uint';
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClarityType"].Buffer:
            return `(buff ${Math.ceil(val.value.length / 2)})`;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClarityType"].OptionalNone:
            return '(optional none)';
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClarityType"].OptionalSome:
            return `(optional ${getCVTypeString(val.value)})`;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClarityType"].ResponseErr:
            return `(response UnknownType ${getCVTypeString(val.value)})`;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClarityType"].ResponseOk:
            return `(response ${getCVTypeString(val.value)} UnknownType)`;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClarityType"].PrincipalStandard:
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClarityType"].PrincipalContract:
            return 'principal';
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClarityType"].List:
            return `(list ${val.value.length} ${val.value.length ? getCVTypeString(val.value[0]) : 'UnknownType'})`;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClarityType"].Tuple:
            return `(tuple ${Object.keys(val.value).map((key)=>`(${key} ${getCVTypeString(val.value[key])})`).join(' ')})`;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClarityType"].StringASCII:
            return `(string-ascii ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$common$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asciiToBytes"])(val.value).length})`;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClarityType"].StringUTF8:
            return `(string-utf8 ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$common$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utf8ToBytes"])(val.value).length})`;
    }
}
function isClarityType(input, withType) {
    return input.type === withType;
} //# sourceMappingURL=clarityValue.js.map
}}),
"[project]/node_modules/@stacks/transactions/dist/esm/fetch.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ACCOUNT_PATH": (()=>ACCOUNT_PATH),
    "BROADCAST_PATH": (()=>BROADCAST_PATH),
    "CONTRACT_ABI_PATH": (()=>CONTRACT_ABI_PATH),
    "MAP_ENTRY_PATH": (()=>MAP_ENTRY_PATH),
    "READONLY_FUNCTION_CALL_PATH": (()=>READONLY_FUNCTION_CALL_PATH),
    "TRANSACTION_FEE_ESTIMATE_PATH": (()=>TRANSACTION_FEE_ESTIMATE_PATH),
    "TRANSFER_FEE_ESTIMATE_PATH": (()=>TRANSFER_FEE_ESTIMATE_PATH),
    "broadcastTransaction": (()=>broadcastTransaction),
    "fetchAbi": (()=>fetchAbi),
    "fetchCallReadOnlyFunction": (()=>fetchCallReadOnlyFunction),
    "fetchContractMapEntry": (()=>fetchContractMapEntry),
    "fetchFeeEstimate": (()=>fetchFeeEstimate),
    "fetchFeeEstimateTransaction": (()=>fetchFeeEstimateTransaction),
    "fetchFeeEstimateTransfer": (()=>fetchFeeEstimateTransfer),
    "fetchNonce": (()=>fetchNonce)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$common$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stacks/common/dist/esm/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$network$2f$dist$2f$esm$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stacks/network/dist/esm/network.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$deserialize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stacks/transactions/dist/esm/clarity/deserialize.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$serialize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stacks/transactions/dist/esm/clarity/serialize.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stacks/transactions/dist/esm/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stacks/transactions/dist/esm/transaction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@stacks/transactions/dist/esm/utils.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$wire$2f$serialization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stacks/transactions/dist/esm/wire/serialization.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
const BROADCAST_PATH = '/v2/transactions';
const TRANSFER_FEE_ESTIMATE_PATH = '/v2/fees/transfer';
const TRANSACTION_FEE_ESTIMATE_PATH = '/v2/fees/transaction';
const ACCOUNT_PATH = '/v2/accounts';
const CONTRACT_ABI_PATH = '/v2/contracts/interface';
const READONLY_FUNCTION_CALL_PATH = '/v2/contracts/call-read';
const MAP_ENTRY_PATH = '/v2/map_entry';
async function broadcastTransaction({ transaction: txOpt, attachment: attachOpt, network: _network, client: _client }) {
    const tx = txOpt.serialize();
    const attachment = attachOpt ? typeof attachOpt === 'string' ? attachOpt : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$common$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bytesToHex"])(attachOpt) : undefined;
    const json = attachOpt ? {
        tx,
        attachment
    } : {
        tx
    };
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(json)
    };
    const network = _network ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deriveNetworkFromTx"])(txOpt);
    const client = Object.assign({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$network$2f$dist$2f$esm$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clientFromNetwork"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$network$2f$dist$2f$esm$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["networkFrom"])(network)), _client);
    const url = `${client.baseUrl}${BROADCAST_PATH}`;
    const response = await client.fetch(url, options);
    if (!response.ok) {
        try {
            return await response.json();
        } catch (e) {
            throw Error('Failed to broadcast transaction (unable to parse node response).', {
                cause: e
            });
        }
    }
    const text = await response.text();
    const txid = text.replace(/["]+/g, '');
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$common$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateHash256"])(txid)) throw new Error(text);
    return {
        txid
    };
}
async function _getNonceApi({ address, network = 'mainnet', client: _client }) {
    const client = Object.assign({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$network$2f$dist$2f$esm$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clientFromNetwork"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$network$2f$dist$2f$esm$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["networkFrom"])(network)), _client);
    const url = `${client.baseUrl}/extended/v1/address/${address}/nonces`;
    const response = await client.fetch(url);
    const result = await response.json();
    return BigInt(result.possible_next_nonce);
}
async function fetchNonce(opts) {
    try {
        return await _getNonceApi(opts);
    } catch (e) {}
    const network = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$network$2f$dist$2f$esm$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["networkFrom"])(opts.network ?? 'mainnet');
    const client = Object.assign({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$network$2f$dist$2f$esm$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clientFromNetwork"])(network), opts.client);
    const url = `${client.baseUrl}${ACCOUNT_PATH}/${opts.address}?proof=0`;
    const response = await client.fetch(url);
    if (!response.ok) {
        const msg = await response.text().catch(()=>'');
        throw new Error(`Error fetching nonce. Response ${response.status}: ${response.statusText}. Attempted to fetch ${url} and failed with the message: "${msg}"`);
    }
    const json = await response.json();
    return BigInt(json.nonce);
}
async function fetchFeeEstimateTransfer({ transaction: txOpt, network: _network, client: _client }) {
    const network = typeof txOpt === 'number' ? 'mainnet' : _network ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deriveNetworkFromTx"])(txOpt);
    const client = Object.assign({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$network$2f$dist$2f$esm$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clientFromNetwork"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$network$2f$dist$2f$esm$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["networkFrom"])(network)), _client);
    const url = `${client.baseUrl}${TRANSFER_FEE_ESTIMATE_PATH}`;
    const response = await client.fetch(url, {
        headers: {
            Accept: 'application/text'
        }
    });
    if (!response.ok) {
        const msg = await response.text().catch(()=>'');
        throw new Error(`Error estimating transfer fee. Response ${response.status}: ${response.statusText}. Attempted to fetch ${url} and failed with the message: "${msg}"`);
    }
    const feeRateResult = await response.text();
    const txBytes = typeof txOpt === 'number' ? BigInt(txOpt) : BigInt(Math.ceil(txOpt.serializeBytes().byteLength));
    const feeRate = BigInt(feeRateResult);
    return feeRate * txBytes;
}
async function fetchFeeEstimateTransaction({ payload, estimatedLength, network = 'mainnet', client: _client }) {
    const json = {
        transaction_payload: payload,
        estimated_len: estimatedLength
    };
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(json)
    };
    const client = Object.assign({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$network$2f$dist$2f$esm$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clientFromNetwork"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$network$2f$dist$2f$esm$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["networkFrom"])(network)), _client);
    const url = `${client.baseUrl}${TRANSACTION_FEE_ESTIMATE_PATH}`;
    const response = await client.fetch(url, options);
    if (!response.ok) {
        const body = await response.text().catch(()=>'');
        if (body.includes('NoEstimateAvailable')) {
            let json = {};
            try {
                json = JSON.parse(body);
            } catch (err) {}
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NoEstimateAvailableError"](json?.reason_data?.message ?? '');
        }
        throw new Error(`Error estimating transaction fee. Response ${response.status}: ${response.statusText}. Attempted to fetch ${url} and failed with the message: "${body}"`);
    }
    const data = await response.json();
    return data.estimations;
}
async function fetchFeeEstimate({ transaction: txOpt, network: _network, client: _client }) {
    const network = _network ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deriveNetworkFromTx"])(txOpt);
    const client = Object.assign({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$network$2f$dist$2f$esm$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clientFromNetwork"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$network$2f$dist$2f$esm$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["networkFrom"])(network)), _client);
    try {
        const estimatedLength = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["estimateTransactionByteLength"])(txOpt);
        return (await fetchFeeEstimateTransaction({
            payload: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$common$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bytesToHex"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$wire$2f$serialization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializePayloadBytes"])(txOpt.payload)),
            estimatedLength,
            network,
            client
        }))[1].fee;
    } catch (error) {
        if (!(error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NoEstimateAvailableError"])) throw error;
        return await fetchFeeEstimateTransfer({
            transaction: txOpt,
            network
        });
    }
}
async function fetchAbi({ contractAddress: address, contractName: name, network = 'mainnet', client: _client }) {
    const client = Object.assign({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$network$2f$dist$2f$esm$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clientFromNetwork"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$network$2f$dist$2f$esm$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["networkFrom"])(network)), _client);
    const url = `${client.baseUrl}${CONTRACT_ABI_PATH}/${address}/${name}`;
    const response = await client.fetch(url);
    if (!response.ok) {
        const msg = await response.text().catch(()=>'');
        throw new Error(`Error fetching contract ABI for contract "${name}" at address ${address}. Response ${response.status}: ${response.statusText}. Attempted to fetch ${url} and failed with the message: "${msg}"`);
    }
    return JSON.parse(await response.text());
}
async function fetchCallReadOnlyFunction({ contractName, contractAddress, functionName, functionArgs, senderAddress, network = 'mainnet', client: _client }) {
    const json = {
        sender: senderAddress,
        arguments: functionArgs.map((arg)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cvToHex"])(arg))
    };
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(json)
    };
    const name = encodeURIComponent(functionName);
    const client = Object.assign({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$network$2f$dist$2f$esm$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clientFromNetwork"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$network$2f$dist$2f$esm$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["networkFrom"])(network)), _client);
    const url = `${client.baseUrl}${READONLY_FUNCTION_CALL_PATH}/${contractAddress}/${contractName}/${name}`;
    const response = await client.fetch(url, options);
    if (!response.ok) {
        const msg = await response.text().catch(()=>'');
        throw new Error(`Error calling read-only function. Response ${response.status}: ${response.statusText}. Attempted to fetch ${url} and failed with the message: "${msg}"`);
    }
    return await response.json().then(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parseReadOnlyResponse"]);
}
async function fetchContractMapEntry({ contractAddress, contractName, mapName, mapKey, network = 'mainnet', client: _client }) {
    const keyHex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$common$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["with0x"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$serialize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeCV"])(mapKey));
    const options = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(keyHex)
    };
    const client = Object.assign({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$network$2f$dist$2f$esm$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clientFromNetwork"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$network$2f$dist$2f$esm$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["networkFrom"])(network)), _client);
    const url = `${client.baseUrl}${MAP_ENTRY_PATH}/${contractAddress}/${contractName}/${mapName}?proof=0`;
    const response = await client.fetch(url, options);
    if (!response.ok) {
        const msg = await response.text().catch(()=>'');
        throw new Error(`Error fetching map entry for map "${mapName}" in contract "${contractName}" at address ${contractAddress}, using map key "${keyHex}". Response ${response.status}: ${response.statusText}. Attempted to fetch ${url} and failed with the message: "${msg}"`);
    }
    const json = await response.json();
    if (!json.data) {
        throw new Error(`Error fetching map entry for map "${mapName}" in contract "${contractName}" at address ${contractAddress}, using map key "${keyHex}". Response ${response.status}: ${response.statusText}. Attempted to fetch ${client.baseUrl} and failed with the response: "${JSON.stringify(json)}"`);
    }
    try {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$deserialize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deserializeCV"])(json.data);
    } catch (error) {
        throw new Error(`Error deserializing Clarity value "${json.data}": ${error}`);
    }
} //# sourceMappingURL=fetch.js.map
}}),
"[project]/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "hasA11yProp": (()=>hasA11yProp),
    "mergeClasses": (()=>mergeClasses),
    "toCamelCase": (()=>toCamelCase),
    "toKebabCase": (()=>toKebabCase),
    "toPascalCase": (()=>toPascalCase)
});
const toKebabCase = (string)=>string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string)=>string.replace(/^([A-Z])|[\s-_]+(\w)/g, (match, p1, p2)=>p2 ? p2.toUpperCase() : p1.toLowerCase());
const toPascalCase = (string)=>{
    const camelCase = toCamelCase(string);
    return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
const mergeClasses = (...classes)=>classes.filter((className, index, array)=>{
        return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
    }).join(" ").trim();
const hasA11yProp = (props)=>{
    for(const prop in props){
        if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
            return true;
        }
    }
};
;
 //# sourceMappingURL=utils.js.map
}}),
"[project]/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "default": (()=>defaultAttributes)
});
var defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
;
 //# sourceMappingURL=defaultAttributes.js.map
}}),
"[project]/node_modules/lucide-react/dist/esm/Icon.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "default": (()=>Icon)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-client] (ecmascript)");
;
;
;
const Icon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ color = "currentColor", size = 24, strokeWidth = 2, absoluteStrokeWidth, className = "", children, iconNode, ...rest }, ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("svg", {
        ref,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeClasses"])("lucide", className),
        ...!children && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasA11yProp"])(rest) && {
            "aria-hidden": "true"
        },
        ...rest
    }, [
        ...iconNode.map(([tag, attrs])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(tag, attrs)),
        ...Array.isArray(children) ? children : [
            children
        ]
    ]));
;
 //# sourceMappingURL=Icon.js.map
}}),
"[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "default": (()=>createLucideIcon)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/Icon.js [app-client] (ecmascript)");
;
;
;
const createLucideIcon = (iconName, iconNode)=>{
    const Component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            ref,
            iconNode,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeClasses"])(`lucide-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toKebabCase"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPascalCase"])(iconName))}`, `lucide-${iconName}`, className),
            ...props
        }));
    Component.displayName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPascalCase"])(iconName);
    return Component;
};
;
 //# sourceMappingURL=createLucideIcon.js.map
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "__iconNode": (()=>__iconNode),
    "default": (()=>ArrowLeft)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m12 19-7-7 7-7",
            key: "1l729n"
        }
    ],
    [
        "path",
        {
            d: "M19 12H5",
            key: "x3x0zl"
        }
    ]
];
const ArrowLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("arrow-left", __iconNode);
;
 //# sourceMappingURL=arrow-left.js.map
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ArrowLeft": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript)");
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "__iconNode": (()=>__iconNode),
    "default": (()=>Heart)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
            key: "c3ymky"
        }
    ]
];
const Heart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("heart", __iconNode);
;
 //# sourceMappingURL=heart.js.map
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Heart": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript)");
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "__iconNode": (()=>__iconNode),
    "default": (()=>CircleAlert)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "line",
        {
            x1: "12",
            x2: "12",
            y1: "8",
            y2: "12",
            key: "1pkeuh"
        }
    ],
    [
        "line",
        {
            x1: "12",
            x2: "12.01",
            y1: "16",
            y2: "16",
            key: "4dfq90"
        }
    ]
];
const CircleAlert = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("circle-alert", __iconNode);
;
 //# sourceMappingURL=circle-alert.js.map
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "AlertCircle": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript)");
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "__iconNode": (()=>__iconNode),
    "default": (()=>CircleCheckBig)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M21.801 10A10 10 0 1 1 17 3.335",
            key: "yps3ct"
        }
    ],
    [
        "path",
        {
            d: "m9 11 3 3L22 4",
            key: "1pflzl"
        }
    ]
];
const CircleCheckBig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("circle-check-big", __iconNode);
;
 //# sourceMappingURL=circle-check-big.js.map
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "CheckCircle": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript)");
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "__iconNode": (()=>__iconNode),
    "default": (()=>LoaderCircle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M21 12a9 9 0 1 1-6.219-8.56",
            key: "13zald"
        }
    ]
];
const LoaderCircle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("loader-circle", __iconNode);
;
 //# sourceMappingURL=loader-circle.js.map
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Loader2": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript)");
}}),
}]);

//# sourceMappingURL=_ad369fa6._.js.map
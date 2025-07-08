module.exports = {

"[project]/src/data/mockData.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
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
}}),
"[project]/src/services/contractService.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "contractService": (()=>contractService)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$network$2f$dist$2f$esm$2f$network$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stacks/network/dist/esm/network.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$clarityValue$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stacks/transactions/dist/esm/clarity/clarityValue.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$fetch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stacks/transactions/dist/esm/fetch.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/mockData.ts [app-ssr] (ecmascript)");
;
;
;
// Environment configuration using Hiro API
const getNetwork = ()=>{
    const networkType = process.env.NEXT_PUBLIC_STACKS_NETWORK || 'testnet';
    if (networkType === 'mainnet') {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$network$2f$dist$2f$esm$2f$network$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["STACKS_MAINNET"];
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$network$2f$dist$2f$esm$2f$network$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["STACKS_TESTNET"];
};
const network = getNetwork();
const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || 'ST3AM1A56AK2C1XAFJ4115ZSV26EB49BVQ10MGCS0';
const DONATION_CONTRACT_NAME = process.env.NEXT_PUBLIC_DONATION_CONTRACT_NAME || 'donation-tracker-v2';
const REWARDS_CONTRACT_NAME = process.env.NEXT_PUBLIC_REWARDS_CONTRACT_NAME || 'donation-rewards-v2';
const HIRO_API_KEY = process.env.NEXT_PUBLIC_PLATFORM_HIRO_API_KEY;
// Flag to use mock data when contracts aren't deployed
const USE_MOCK_DATA = true; // Set to false when contracts are deployed and working
class ContractService {
    apiUrl = process.env.NEXT_PUBLIC_STACKS_API_URL || 'https://api.testnet.hiro.so';
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
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$fetch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchCallReadOnlyFunction"])({
                contractAddress: CONTRACT_ADDRESS,
                contractName: DONATION_CONTRACT_NAME,
                functionName,
                functionArgs,
                network,
                senderAddress: CONTRACT_ADDRESS
            });
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$clarityValue$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cvToJSON"])(result);
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
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockCampaigns"].find((c)=>c.id === campaignId) || null;
        }
        "TURBOPACK unreachable";
    }
    async getTotalCampaigns() {
        if ("TURBOPACK compile-time truthy", 1) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockCampaigns"].length;
        }
        "TURBOPACK unreachable";
    }
    async getTotalDonations() {
        if ("TURBOPACK compile-time truthy", 1) {
            // Calculate total donations from mock data
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockCampaigns"].reduce((total, campaign)=>{
                return total + Math.ceil(campaign.currentAmount / 5);
            }, 0);
        }
        "TURBOPACK unreachable";
    }
    async getAllCampaigns() {
        if ("TURBOPACK compile-time truthy", 1) {
            return [
                ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockCampaigns"]
            ];
        }
        "TURBOPACK unreachable";
    }
}
const contractService = new ContractService();
}}),
"[project]/src/components/DonationModal.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "DonationModal": (()=>DonationModal)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
'use client';
;
;
;
const DonationModal = ({ isOpen, onClose, campaignId, campaignTitle, onDonate })=>{
    const [amount, setAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const donationAmount = parseFloat(amount);
        if (isNaN(donationAmount) || donationAmount <= 0) {
            setError('Please enter a valid donation amount');
            return;
        }
        try {
            setIsSubmitting(true);
            setError(null);
            await onDonate(donationAmount, message || undefined);
            // Reset form
            setAmount('');
            setMessage('');
            onClose();
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to process donation');
        } finally{
            setIsSubmitting(false);
        }
    };
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-lg max-w-md w-full max-h-screen overflow-y-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between p-6 border-b border-gray-200",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-bold text-gray-900",
                            children: "Make a Donation"
                        }, void 0, false, {
                            fileName: "[project]/src/components/DonationModal.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "text-gray-400 hover:text-gray-600 transition-colors",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "h-6 w-6"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DonationModal.tsx",
                                lineNumber: 62,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/DonationModal.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/DonationModal.tsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-600",
                                    children: "Donating to:"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/DonationModal.tsx",
                                    lineNumber: 69,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-medium text-gray-900",
                                    children: campaignTitle
                                }, void 0, false, {
                                    fileName: "[project]/src/components/DonationModal.tsx",
                                    lineNumber: 70,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/DonationModal.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSubmit,
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "amount",
                                            className: "block text-sm font-medium text-gray-700 mb-2",
                                            children: "Amount (STX) *"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/DonationModal.tsx",
                                            lineNumber: 76,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            id: "amount",
                                            value: amount,
                                            onChange: (e)=>setAmount(e.target.value),
                                            step: "0.000001",
                                            min: "0.000001",
                                            className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                                            placeholder: "0.00",
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/DonationModal.tsx",
                                            lineNumber: 79,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/DonationModal.tsx",
                                    lineNumber: 75,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "message",
                                            className: "block text-sm font-medium text-gray-700 mb-2",
                                            children: "Message (optional)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/DonationModal.tsx",
                                            lineNumber: 94,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            id: "message",
                                            value: message,
                                            onChange: (e)=>setMessage(e.target.value),
                                            rows: 3,
                                            maxLength: 200,
                                            className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none",
                                            placeholder: "Add an optional message..."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/DonationModal.tsx",
                                            lineNumber: 97,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-500 mt-1",
                                            children: [
                                                message.length,
                                                "/200 characters"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/DonationModal.tsx",
                                            lineNumber: 106,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/DonationModal.tsx",
                                    lineNumber: 93,
                                    columnNumber: 13
                                }, this),
                                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-3 bg-red-50 border border-red-200 rounded-lg",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-red-600",
                                        children: error
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DonationModal.tsx",
                                        lineNumber: 112,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/DonationModal.tsx",
                                    lineNumber: 111,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex space-x-3 pt-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: onClose,
                                            className: "flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors",
                                            disabled: isSubmitting,
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/DonationModal.tsx",
                                            lineNumber: 118,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            disabled: isSubmitting || !amount,
                                            className: "flex-1 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                                            children: isSubmitting ? 'Processing...' : 'Donate'
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/DonationModal.tsx",
                                            lineNumber: 126,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/DonationModal.tsx",
                                    lineNumber: 117,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/DonationModal.tsx",
                            lineNumber: 73,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/DonationModal.tsx",
                    lineNumber: 67,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/DonationModal.tsx",
            lineNumber: 54,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/DonationModal.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
};
}}),
"[project]/src/app/campaign/[id]/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CampaignDetailPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$WalletContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/WalletContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$contractService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/contractService.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DonationModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/DonationModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-ssr] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-ssr] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
function CampaignDetailPage() {
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { isConnected, userData, donateToCampaign } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$WalletContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWallet"])();
    const [campaign, setCampaign] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showDonationModal, setShowDonationModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const campaignId = parseInt(params.id, 10);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setMounted(true);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (mounted) {
            fetchCampaign();
        }
    }, [
        mounted,
        campaignId
    ]);
    const fetchCampaign = async ()=>{
        try {
            setLoading(true);
            setError(null);
            if (!campaignId || isNaN(campaignId)) {
                setError('Invalid campaign ID');
                return;
            }
            const campaignData = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$contractService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["contractService"].getCampaign(campaignId);
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
    const handleDonationSuccess = ()=>{
        // Refresh campaign data after successful donation
        fetchCampaign();
        setShowDonationModal(false);
    };
    const handleDonate = async (amount, message)=>{
        try {
            if (!isConnected || !campaign || !donateToCampaign) return;
            await donateToCampaign(campaign.id, amount, message);
            handleDonationSuccess();
        } catch (error) {
            console.error('Donation failed:', error);
            throw error;
        }
    };
    const formatAmount = (amount)=>{
        return new Intl.NumberFormat('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 6
        }).format(amount);
    };
    const progressPercentage = campaign ? Math.min(campaign.currentAmount / campaign.targetAmount * 100, 100) : 0;
    const getDaysRemaining = ()=>{
        if (!campaign) return 0;
        // Assuming each block is ~10 minutes on average
        const blocksPerDay = 144;
        const currentBlock = 0; // This would need to be fetched from the network
        const remainingBlocks = Math.max(0, campaign.endBlock - currentBlock);
        return Math.ceil(remainingBlocks / blocksPerDay);
    };
    if (!mounted) {
        return null; // Prevent hydration mismatch
    }
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gray-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 py-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-center min-h-[400px]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "loading-spinner"
                    }, void 0, false, {
                        fileName: "[project]/src/app/campaign/[id]/page.tsx",
                        lineNumber: 106,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/campaign/[id]/page.tsx",
                    lineNumber: 105,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/campaign/[id]/page.tsx",
                lineNumber: 104,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/campaign/[id]/page.tsx",
            lineNumber: 103,
            columnNumber: 7
        }, this);
    }
    if (error || !campaign) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gray-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 py-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "inline-flex items-center text-blue-600 hover:text-blue-800 mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                className: "w-4 h-4 mr-2"
                            }, void 0, false, {
                                fileName: "[project]/src/app/campaign/[id]/page.tsx",
                                lineNumber: 118,
                                columnNumber: 13
                            }, this),
                            "Back to Campaigns"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/campaign/[id]/page.tsx",
                        lineNumber: 117,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-lg shadow-md p-8 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                className: "w-16 h-16 text-red-500 mx-auto mb-4"
                            }, void 0, false, {
                                fileName: "[project]/src/app/campaign/[id]/page.tsx",
                                lineNumber: 123,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-2xl font-bold text-gray-900 mb-2",
                                children: error || 'Campaign Not Found'
                            }, void 0, false, {
                                fileName: "[project]/src/app/campaign/[id]/page.tsx",
                                lineNumber: 124,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600 mb-6",
                                children: "The campaign you're looking for doesn't exist or has been removed."
                            }, void 0, false, {
                                fileName: "[project]/src/app/campaign/[id]/page.tsx",
                                lineNumber: 127,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "btn-primary",
                                children: "View All Campaigns"
                            }, void 0, false, {
                                fileName: "[project]/src/app/campaign/[id]/page.tsx",
                                lineNumber: 130,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/campaign/[id]/page.tsx",
                        lineNumber: 122,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/campaign/[id]/page.tsx",
                lineNumber: 116,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/campaign/[id]/page.tsx",
            lineNumber: 115,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 py-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "inline-flex items-center text-blue-600 hover:text-blue-800 mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                className: "w-4 h-4 mr-2"
                            }, void 0, false, {
                                fileName: "[project]/src/app/campaign/[id]/page.tsx",
                                lineNumber: 144,
                                columnNumber: 11
                            }, this),
                            "Back to Campaigns"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/campaign/[id]/page.tsx",
                        lineNumber: 143,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 lg:grid-cols-3 gap-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white rounded-xl shadow-lg overflow-hidden",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-6 border-b border-gray-200",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-start justify-between mb-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                            className: "text-3xl font-bold text-gray-900",
                                                            children: campaign.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/campaign/[id]/page.tsx",
                                                            lineNumber: 155,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `px-3 py-1 rounded-full text-sm font-medium ${campaign.isActive ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`,
                                                            children: campaign.isActive ? 'Active' : 'Ended'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/campaign/[id]/page.tsx",
                                                            lineNumber: 158,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/campaign/[id]/page.tsx",
                                                    lineNumber: 154,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center text-sm text-gray-600",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                            className: "w-4 h-4 mr-2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/campaign/[id]/page.tsx",
                                                            lineNumber: 171,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: [
                                                                "Created by: ",
                                                                campaign.creator
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/campaign/[id]/page.tsx",
                                                            lineNumber: 172,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/campaign/[id]/page.tsx",
                                                    lineNumber: 170,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/campaign/[id]/page.tsx",
                                            lineNumber: 153,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-6 border-b border-gray-200",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mb-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between items-center mb-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-sm font-medium text-gray-700",
                                                                    children: "Progress"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/campaign/[id]/page.tsx",
                                                                    lineNumber: 180,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-sm text-gray-600",
                                                                    children: [
                                                                        progressPercentage.toFixed(1),
                                                                        "%"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/campaign/[id]/page.tsx",
                                                                    lineNumber: 181,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/campaign/[id]/page.tsx",
                                                            lineNumber: 179,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-full bg-gray-200 rounded-full h-3",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "bg-blue-600 h-3 rounded-full transition-all duration-300",
                                                                style: {
                                                                    width: `${progressPercentage}%`
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/campaign/[id]/page.tsx",
                                                                lineNumber: 186,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/campaign/[id]/page.tsx",
                                                            lineNumber: 185,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/campaign/[id]/page.tsx",
                                                    lineNumber: 178,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-3 gap-4 text-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-2xl font-bold text-gray-900",
                                                                    children: [
                                                                        formatAmount(campaign.currentAmount),
                                                                        " STX"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/campaign/[id]/page.tsx",
                                                                    lineNumber: 195,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-sm text-gray-600",
                                                                    children: "Raised"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/campaign/[id]/page.tsx",
                                                                    lineNumber: 198,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/campaign/[id]/page.tsx",
                                                            lineNumber: 194,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-2xl font-bold text-gray-900",
                                                                    children: [
                                                                        formatAmount(campaign.targetAmount),
                                                                        " STX"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/campaign/[id]/page.tsx",
                                                                    lineNumber: 201,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-sm text-gray-600",
                                                                    children: "Goal"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/campaign/[id]/page.tsx",
                                                                    lineNumber: 204,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/campaign/[id]/page.tsx",
                                                            lineNumber: 200,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-2xl font-bold text-gray-900",
                                                                    children: getDaysRemaining()
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/campaign/[id]/page.tsx",
                                                                    lineNumber: 207,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-sm text-gray-600",
                                                                    children: "Days Left"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/campaign/[id]/page.tsx",
                                                                    lineNumber: 210,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/campaign/[id]/page.tsx",
                                                            lineNumber: 206,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/campaign/[id]/page.tsx",
                                                    lineNumber: 193,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/campaign/[id]/page.tsx",
                                            lineNumber: 177,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-xl font-bold text-gray-900 mb-4",
                                                    children: "About This Campaign"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/campaign/[id]/page.tsx",
                                                    lineNumber: 217,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "prose prose-gray max-w-none",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-700 leading-relaxed whitespace-pre-wrap",
                                                        children: campaign.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/campaign/[id]/page.tsx",
                                                        lineNumber: 219,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/campaign/[id]/page.tsx",
                                                    lineNumber: 218,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/campaign/[id]/page.tsx",
                                            lineNumber: 216,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/campaign/[id]/page.tsx",
                                    lineNumber: 151,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/campaign/[id]/page.tsx",
                                lineNumber: 150,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white rounded-xl shadow-lg p-6 sticky top-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold text-gray-900 mb-6",
                                            children: "Support This Campaign"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/campaign/[id]/page.tsx",
                                            lineNumber: 230,
                                            columnNumber: 15
                                        }, this),
                                        campaign.isActive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4",
                                            children: [
                                                isConnected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setShowDonationModal(true),
                                                    className: "w-full btn-primary flex items-center justify-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                                            className: "w-5 h-5 mr-2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/campaign/[id]/page.tsx",
                                                            lineNumber: 239,
                                                            columnNumber: 23
                                                        }, this),
                                                        "Donate Now"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/campaign/[id]/page.tsx",
                                                    lineNumber: 235,
                                                    columnNumber: 21
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-600 mb-4",
                                                            children: "Connect your wallet to donate"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/campaign/[id]/page.tsx",
                                                            lineNumber: 244,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "btn-secondary w-full",
                                                            children: "Connect Wallet"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/campaign/[id]/page.tsx",
                                                            lineNumber: 245,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/campaign/[id]/page.tsx",
                                                    lineNumber: 243,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-gray-50 rounded-lg p-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "font-medium text-gray-900 mb-2",
                                                            children: "Campaign Stats"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/campaign/[id]/page.tsx",
                                                            lineNumber: 252,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-2 text-sm",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex justify-between",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-gray-600",
                                                                            children: "Campaign Status:"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/campaign/[id]/page.tsx",
                                                                            lineNumber: 255,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-medium",
                                                                            children: campaign.isActive ? 'Active' : 'Ended'
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/campaign/[id]/page.tsx",
                                                                            lineNumber: 256,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/campaign/[id]/page.tsx",
                                                                    lineNumber: 254,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex justify-between",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-gray-600",
                                                                            children: "Campaign ID:"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/campaign/[id]/page.tsx",
                                                                            lineNumber: 259,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-medium",
                                                                            children: [
                                                                                "#",
                                                                                campaign.id
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/campaign/[id]/page.tsx",
                                                                            lineNumber: 260,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/campaign/[id]/page.tsx",
                                                                    lineNumber: 258,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex justify-between",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-gray-600",
                                                                            children: "End Block:"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/campaign/[id]/page.tsx",
                                                                            lineNumber: 263,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-medium",
                                                                            children: campaign.endBlock
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/campaign/[id]/page.tsx",
                                                                            lineNumber: 264,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/campaign/[id]/page.tsx",
                                                                    lineNumber: 262,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/campaign/[id]/page.tsx",
                                                            lineNumber: 253,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/campaign/[id]/page.tsx",
                                                    lineNumber: 251,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/campaign/[id]/page.tsx",
                                            lineNumber: 233,
                                            columnNumber: 17
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center py-8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                    className: "w-12 h-12 text-gray-400 mx-auto mb-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/campaign/[id]/page.tsx",
                                                    lineNumber: 271,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-lg font-medium text-gray-900 mb-2",
                                                    children: "Campaign Ended"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/campaign/[id]/page.tsx",
                                                    lineNumber: 272,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-600",
                                                    children: "This campaign is no longer accepting donations."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/campaign/[id]/page.tsx",
                                                    lineNumber: 273,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/campaign/[id]/page.tsx",
                                            lineNumber: 270,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/campaign/[id]/page.tsx",
                                    lineNumber: 229,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/campaign/[id]/page.tsx",
                                lineNumber: 228,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/campaign/[id]/page.tsx",
                        lineNumber: 148,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/campaign/[id]/page.tsx",
                lineNumber: 141,
                columnNumber: 7
            }, this),
            showDonationModal && campaign && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DonationModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DonationModal"], {
                campaignId: campaign.id,
                campaignTitle: campaign.title,
                isOpen: showDonationModal,
                onClose: ()=>setShowDonationModal(false),
                onDonate: handleDonate
            }, void 0, false, {
                fileName: "[project]/src/app/campaign/[id]/page.tsx",
                lineNumber: 283,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/campaign/[id]/page.tsx",
        lineNumber: 140,
        columnNumber: 5
    }, this);
}
}}),
"[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-ssr] (ecmascript)");
}}),
"[project]/node_modules/@stacks/transactions/dist/esm/clarity/clarityValue.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stacks/transactions/dist/esm/clarity/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$common$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stacks/common/dist/esm/utils.js [app-ssr] (ecmascript)");
;
;
function cvToString(val, encoding = 'hex') {
    switch(val.type){
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClarityType"].BoolTrue:
            return 'true';
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClarityType"].BoolFalse:
            return 'false';
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClarityType"].Int:
            return val.value.toString();
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClarityType"].UInt:
            return `u${val.value.toString()}`;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClarityType"].Buffer:
            if (encoding === 'tryAscii') {
                const str = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$common$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bytesToAscii"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$common$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBytes"])(val.value));
                if (/[ -~]/.test(str)) {
                    return JSON.stringify(str);
                }
            }
            return `0x${val.value}`;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClarityType"].OptionalNone:
            return 'none';
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClarityType"].OptionalSome:
            return `(some ${cvToString(val.value, encoding)})`;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClarityType"].ResponseErr:
            return `(err ${cvToString(val.value, encoding)})`;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClarityType"].ResponseOk:
            return `(ok ${cvToString(val.value, encoding)})`;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClarityType"].PrincipalStandard:
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClarityType"].PrincipalContract:
            return val.value;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClarityType"].List:
            return `(list ${val.value.map((v)=>cvToString(v, encoding)).join(' ')})`;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClarityType"].Tuple:
            return `(tuple ${Object.keys(val.value).map((key)=>`(${key} ${cvToString(val.value[key], encoding)})`).join(' ')})`;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClarityType"].StringASCII:
            return `"${val.value}"`;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClarityType"].StringUTF8:
            return `u"${val.value}"`;
    }
}
function cvToValue(val, strictJsonCompat = false) {
    switch(val.type){
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClarityType"].BoolTrue:
            return true;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClarityType"].BoolFalse:
            return false;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClarityType"].Int:
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClarityType"].UInt:
            if (strictJsonCompat) {
                return val.value.toString();
            }
            return val.value;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClarityType"].Buffer:
            return `0x${val.value}`;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClarityType"].OptionalNone:
            return null;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClarityType"].OptionalSome:
            return cvToJSON(val.value);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClarityType"].ResponseErr:
            return cvToJSON(val.value);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClarityType"].ResponseOk:
            return cvToJSON(val.value);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClarityType"].PrincipalStandard:
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClarityType"].PrincipalContract:
            return val.value;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClarityType"].List:
            return val.value.map((v)=>cvToJSON(v));
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClarityType"].Tuple:
            const result = {};
            Object.keys(val.value).forEach((key)=>{
                result[key] = cvToJSON(val.value[key]);
            });
            return result;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClarityType"].StringASCII:
            return val.value;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClarityType"].StringUTF8:
            return val.value;
    }
}
function cvToJSON(val) {
    switch(val.type){
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClarityType"].ResponseErr:
            return {
                type: getCVTypeString(val),
                value: cvToValue(val, true),
                success: false
            };
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClarityType"].ResponseOk:
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
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClarityType"].BoolTrue:
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClarityType"].BoolFalse:
            return 'bool';
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClarityType"].Int:
            return 'int';
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClarityType"].UInt:
            return 'uint';
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClarityType"].Buffer:
            return `(buff ${Math.ceil(val.value.length / 2)})`;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClarityType"].OptionalNone:
            return '(optional none)';
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClarityType"].OptionalSome:
            return `(optional ${getCVTypeString(val.value)})`;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClarityType"].ResponseErr:
            return `(response UnknownType ${getCVTypeString(val.value)})`;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClarityType"].ResponseOk:
            return `(response ${getCVTypeString(val.value)} UnknownType)`;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClarityType"].PrincipalStandard:
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClarityType"].PrincipalContract:
            return 'principal';
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClarityType"].List:
            return `(list ${val.value.length} ${val.value.length ? getCVTypeString(val.value[0]) : 'UnknownType'})`;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClarityType"].Tuple:
            return `(tuple ${Object.keys(val.value).map((key)=>`(${key} ${getCVTypeString(val.value[key])})`).join(' ')})`;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClarityType"].StringASCII:
            return `(string-ascii ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$common$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["asciiToBytes"])(val.value).length})`;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClarityType"].StringUTF8:
            return `(string-utf8 ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$common$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utf8ToBytes"])(val.value).length})`;
    }
}
function isClarityType(input, withType) {
    return input.type === withType;
} //# sourceMappingURL=clarityValue.js.map
}}),
"[project]/node_modules/@stacks/transactions/dist/esm/fetch.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$common$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stacks/common/dist/esm/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$network$2f$dist$2f$esm$2f$network$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stacks/network/dist/esm/network.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$deserialize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stacks/transactions/dist/esm/clarity/deserialize.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$serialize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stacks/transactions/dist/esm/clarity/serialize.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stacks/transactions/dist/esm/errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stacks/transactions/dist/esm/transaction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@stacks/transactions/dist/esm/utils.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$wire$2f$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stacks/transactions/dist/esm/wire/serialization.js [app-ssr] (ecmascript)");
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
    const attachment = attachOpt ? typeof attachOpt === 'string' ? attachOpt : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$common$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bytesToHex"])(attachOpt) : undefined;
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
    const network = _network ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deriveNetworkFromTx"])(txOpt);
    const client = Object.assign({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$network$2f$dist$2f$esm$2f$network$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clientFromNetwork"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$network$2f$dist$2f$esm$2f$network$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["networkFrom"])(network)), _client);
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
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$common$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateHash256"])(txid)) throw new Error(text);
    return {
        txid
    };
}
async function _getNonceApi({ address, network = 'mainnet', client: _client }) {
    const client = Object.assign({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$network$2f$dist$2f$esm$2f$network$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clientFromNetwork"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$network$2f$dist$2f$esm$2f$network$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["networkFrom"])(network)), _client);
    const url = `${client.baseUrl}/extended/v1/address/${address}/nonces`;
    const response = await client.fetch(url);
    const result = await response.json();
    return BigInt(result.possible_next_nonce);
}
async function fetchNonce(opts) {
    try {
        return await _getNonceApi(opts);
    } catch (e) {}
    const network = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$network$2f$dist$2f$esm$2f$network$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["networkFrom"])(opts.network ?? 'mainnet');
    const client = Object.assign({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$network$2f$dist$2f$esm$2f$network$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clientFromNetwork"])(network), opts.client);
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
    const network = typeof txOpt === 'number' ? 'mainnet' : _network ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deriveNetworkFromTx"])(txOpt);
    const client = Object.assign({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$network$2f$dist$2f$esm$2f$network$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clientFromNetwork"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$network$2f$dist$2f$esm$2f$network$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["networkFrom"])(network)), _client);
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
    const client = Object.assign({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$network$2f$dist$2f$esm$2f$network$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clientFromNetwork"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$network$2f$dist$2f$esm$2f$network$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["networkFrom"])(network)), _client);
    const url = `${client.baseUrl}${TRANSACTION_FEE_ESTIMATE_PATH}`;
    const response = await client.fetch(url, options);
    if (!response.ok) {
        const body = await response.text().catch(()=>'');
        if (body.includes('NoEstimateAvailable')) {
            let json = {};
            try {
                json = JSON.parse(body);
            } catch (err) {}
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NoEstimateAvailableError"](json?.reason_data?.message ?? '');
        }
        throw new Error(`Error estimating transaction fee. Response ${response.status}: ${response.statusText}. Attempted to fetch ${url} and failed with the message: "${body}"`);
    }
    const data = await response.json();
    return data.estimations;
}
async function fetchFeeEstimate({ transaction: txOpt, network: _network, client: _client }) {
    const network = _network ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deriveNetworkFromTx"])(txOpt);
    const client = Object.assign({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$network$2f$dist$2f$esm$2f$network$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clientFromNetwork"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$network$2f$dist$2f$esm$2f$network$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["networkFrom"])(network)), _client);
    try {
        const estimatedLength = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["estimateTransactionByteLength"])(txOpt);
        return (await fetchFeeEstimateTransaction({
            payload: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$common$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bytesToHex"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$wire$2f$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializePayloadBytes"])(txOpt.payload)),
            estimatedLength,
            network,
            client
        }))[1].fee;
    } catch (error) {
        if (!(error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NoEstimateAvailableError"])) throw error;
        return await fetchFeeEstimateTransfer({
            transaction: txOpt,
            network
        });
    }
}
async function fetchAbi({ contractAddress: address, contractName: name, network = 'mainnet', client: _client }) {
    const client = Object.assign({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$network$2f$dist$2f$esm$2f$network$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clientFromNetwork"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$network$2f$dist$2f$esm$2f$network$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["networkFrom"])(network)), _client);
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
        arguments: functionArgs.map((arg)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cvToHex"])(arg))
    };
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(json)
    };
    const name = encodeURIComponent(functionName);
    const client = Object.assign({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$network$2f$dist$2f$esm$2f$network$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clientFromNetwork"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$network$2f$dist$2f$esm$2f$network$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["networkFrom"])(network)), _client);
    const url = `${client.baseUrl}${READONLY_FUNCTION_CALL_PATH}/${contractAddress}/${contractName}/${name}`;
    const response = await client.fetch(url, options);
    if (!response.ok) {
        const msg = await response.text().catch(()=>'');
        throw new Error(`Error calling read-only function. Response ${response.status}: ${response.statusText}. Attempted to fetch ${url} and failed with the message: "${msg}"`);
    }
    return await response.json().then(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parseReadOnlyResponse"]);
}
async function fetchContractMapEntry({ contractAddress, contractName, mapName, mapKey, network = 'mainnet', client: _client }) {
    const keyHex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$common$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["with0x"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$serialize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeCV"])(mapKey));
    const options = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(keyHex)
    };
    const client = Object.assign({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$network$2f$dist$2f$esm$2f$network$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clientFromNetwork"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$network$2f$dist$2f$esm$2f$network$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["networkFrom"])(network)), _client);
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
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$deserialize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deserializeCV"])(json.data);
    } catch (error) {
        throw new Error(`Error deserializing Clarity value "${json.data}": ${error}`);
    }
} //# sourceMappingURL=fetch.js.map
}}),
"[project]/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
"[project]/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
"[project]/node_modules/lucide-react/dist/esm/Icon.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-ssr] (ecmascript)");
;
;
;
const Icon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ color = "currentColor", size = 24, strokeWidth = 2, absoluteStrokeWidth, className = "", children, iconNode, ...rest }, ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", {
        ref,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeClasses"])("lucide", className),
        ...!children && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasA11yProp"])(rest) && {
            "aria-hidden": "true"
        },
        ...rest
    }, [
        ...iconNode.map(([tag, attrs])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(tag, attrs)),
        ...Array.isArray(children) ? children : [
            children
        ]
    ]));
;
 //# sourceMappingURL=Icon.js.map
}}),
"[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/Icon.js [app-ssr] (ecmascript)");
;
;
;
const createLucideIcon = (iconName, iconNode)=>{
    const Component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            ref,
            iconNode,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeClasses"])(`lucide-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toKebabCase"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toPascalCase"])(iconName))}`, `lucide-${iconName}`, className),
            ...props
        }));
    Component.displayName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toPascalCase"])(iconName);
    return Component;
};
;
 //# sourceMappingURL=createLucideIcon.js.map
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "default": (()=>X)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M18 6 6 18",
            key: "1bl5f8"
        }
    ],
    [
        "path",
        {
            d: "m6 6 12 12",
            key: "d8bk6v"
        }
    ]
];
const X = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("x", __iconNode);
;
 //# sourceMappingURL=x.js.map
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "X": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript)");
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
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
const ArrowLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("arrow-left", __iconNode);
;
 //# sourceMappingURL=arrow-left.js.map
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ArrowLeft": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript)");
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "default": (()=>Users)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
            key: "1yyitq"
        }
    ],
    [
        "path",
        {
            d: "M16 3.128a4 4 0 0 1 0 7.744",
            key: "16gr8j"
        }
    ],
    [
        "path",
        {
            d: "M22 21v-2a4 4 0 0 0-3-3.87",
            key: "kshegd"
        }
    ],
    [
        "circle",
        {
            cx: "9",
            cy: "7",
            r: "4",
            key: "nufk8"
        }
    ]
];
const Users = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("users", __iconNode);
;
 //# sourceMappingURL=users.js.map
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Users": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript)");
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
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
const Heart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("heart", __iconNode);
;
 //# sourceMappingURL=heart.js.map
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-ssr] (ecmascript) <export default as Heart>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Heart": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-ssr] (ecmascript)");
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
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
const CircleAlert = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("circle-alert", __iconNode);
;
 //# sourceMappingURL=circle-alert.js.map
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-ssr] (ecmascript) <export default as AlertCircle>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "AlertCircle": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-ssr] (ecmascript)");
}}),

};

//# sourceMappingURL=_f5d359c6._.js.map
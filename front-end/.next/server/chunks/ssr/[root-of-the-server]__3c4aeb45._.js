module.exports = {

"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[project]/src/lib/devnet-wallet-context.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "DevnetWalletContext": (()=>DevnetWalletContext),
    "devnetWallets": (()=>devnetWallets),
    "useDevnetWallet": (()=>useDevnetWallet)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const devnetWallets = [
    {
        stxAddress: 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM',
        label: 'Deployer',
        mnemonic: 'twice kind fence tip hidden tilt action fragile skin nothing glory cousin green tomorrow spring wrist shed math olympic multiply hip blue scout claw'
    },
    {
        stxAddress: 'ST1SJ3DTE5DN7X54YDH5D64R3BCB6A2AG2ZQ8YPD5',
        label: 'Wallet 1',
        mnemonic: 'sell invite acquire kitten bamboo drastic jelly vivid peace spawn twice guilt pave pen trash pretty park cube fragile unaware remain midnight betray rebuild'
    },
    {
        stxAddress: 'ST2CY5V39NHDPWSXMW9QDT3HC3GD6Q6XX4CFRK9AG',
        label: 'Wallet 2',
        mnemonic: 'hold excess usual excess ring elephant install account glad dry fragile donkey gaze humble truck breeze nation gasp vacuum limb head keep delay hospital'
    },
    {
        stxAddress: 'ST2JHG361ZXG51QTKY2NQCVBPPRRE2KZB1HR05NNC',
        label: 'Wallet 3',
        mnemonic: 'cycle puppy glare enroll cost improve round trend wrist mushroom scorpion tower claim oppose clever elephant dinosaur eight problem before frozen dune wagon high'
    },
    {
        stxAddress: 'ST2NEB84ASENDXKYGJPQW86YXQCEFEX2ZQPG87ND',
        label: 'Wallet 4',
        mnemonic: 'board list obtain sugar hour worth raven scout denial thunder horse logic fury scorpion fold genuine phrase wealth news aim below celery when cabin'
    }
];
const DevnetWalletContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])({
    currentWallet: null,
    wallets: devnetWallets,
    setCurrentWallet: ()=>{}
});
const useDevnetWallet = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(DevnetWalletContext);
}}),
"[project]/src/components/DevnetWalletProvider.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "DevnetWalletProvider": (()=>DevnetWalletProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$devnet$2d$wallet$2d$context$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/devnet-wallet-context.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
function DevnetWalletProvider({ children }) {
    const [currentWallet, setCurrentWallet] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$devnet$2d$wallet$2d$context$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["devnetWallets"][0]);
    const handleSetCurrentWallet = (wallet)=>{
        if (wallet) {
            setCurrentWallet(wallet);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$devnet$2d$wallet$2d$context$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DevnetWalletContext"].Provider, {
        value: {
            currentWallet,
            wallets: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$devnet$2d$wallet$2d$context$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["devnetWallets"],
            setCurrentWallet: handleSetCurrentWallet
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/DevnetWalletProvider.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
}}),
"[externals]/crypto [external] (crypto, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}}),
"[externals]/stream [external] (stream, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}}),
"[externals]/http [external] (http, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}}),
"[externals]/url [external] (url, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}}),
"[externals]/punycode [external] (punycode, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("punycode", () => require("punycode"));

module.exports = mod;
}}),
"[externals]/https [external] (https, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}}),
"[externals]/zlib [external] (zlib, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}}),
"[project]/src/context/WalletContext.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "WalletProvider": (()=>WalletProvider),
    "useWallet": (()=>useWallet)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$connect$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@stacks/connect/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$network$2f$dist$2f$esm$2f$network$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stacks/network/dist/esm/network.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$values$2f$intCV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stacks/transactions/dist/esm/clarity/values/intCV.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$values$2f$stringCV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stacks/transactions/dist/esm/clarity/values/stringCV.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@stacks/transactions/dist/esm/constants.js [app-ssr] (ecmascript) <locals>");
'use client';
;
;
;
;
;
const WalletContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const useWallet = ()=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(WalletContext);
    if (!context) {
        throw new Error('useWallet must be used within a WalletProvider');
    }
    return context;
};
const appConfig = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$connect$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["AppConfig"]([
    'store_write',
    'publish_data'
]);
const WalletProvider = ({ children })=>{
    const [userSession] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$connect$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["UserSession"]({
            appConfig
        }));
    const [isConnected, setIsConnected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [userData, setUserData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Use StacksNetwork with appropriate configuration
    const network = process.env.NEXT_PUBLIC_NETWORK === 'mainnet' ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$network$2f$dist$2f$esm$2f$network$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["STACKS_MAINNET"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$network$2f$dist$2f$esm$2f$network$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["STACKS_TESTNET"];
    const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || 'ST3AM1A56AK2C1XAFJ4115ZSV26EB49BVQ10MGCS0';
    const donationContractName = process.env.NEXT_PUBLIC_DONATION_CONTRACT_NAME || 'donation-tracker-v2';
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (userSession.isSignInPending()) {
            userSession.handlePendingSignIn().then((userData)=>{
                setUserData(userData);
                setIsConnected(true);
            });
        } else if (userSession.isUserSignedIn()) {
            setUserData(userSession.loadUserData());
            setIsConnected(true);
        }
    }, [
        userSession
    ]);
    const connect = async ()=>{
        setLoading(true);
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$connect$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["showConnect"])({
                appDetails: {
                    name: 'DeFi Donation Tracker',
                    icon: '/logo.svg'
                },
                redirectTo: '/',
                onFinish: ()=>{
                    window.location.reload();
                },
                userSession
            });
        } catch (err) {
            console.error('Wallet connection error:', err);
            setError('Failed to connect wallet');
        } finally{
            setLoading(false);
        }
    };
    const disconnect = ()=>{
        userSession.signUserOut();
        setIsConnected(false);
        setUserData(null);
        window.location.reload();
    };
    const createCampaign = async (title, description, targetAmount, duration)=>{
        if (!isConnected) throw new Error('Wallet not connected');
        setLoading(true);
        try {
            const targetAmountMicroSTX = Math.floor(targetAmount * 1000000); // Convert STX to microSTX
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$connect$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["openContractCall"])({
                network,
                contractAddress,
                contractName: donationContractName,
                functionName: 'create-campaign',
                functionArgs: [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$values$2f$stringCV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stringUtf8CV"])(title),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$values$2f$stringCV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stringUtf8CV"])(description),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$values$2f$intCV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uintCV"])(targetAmountMicroSTX),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$values$2f$intCV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uintCV"])(duration)
                ],
                postConditionMode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PostConditionMode"].Allow,
                anchorMode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["AnchorMode"].Any,
                onFinish: (data)=>{
                    console.log('Campaign created successfully:', data);
                },
                onCancel: ()=>{
                    console.log('Campaign creation cancelled');
                }
            });
        } catch (err) {
            console.error('Campaign creation error:', err);
            setError('Failed to create campaign');
            throw err;
        } finally{
            setLoading(false);
        }
    };
    const donateToCampaign = async (campaignId, amount, message)=>{
        if (!isConnected) throw new Error('Wallet not connected');
        setLoading(true);
        try {
            const amountMicroSTX = Math.floor(amount * 1000000); // Convert STX to microSTX
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$connect$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["openContractCall"])({
                network,
                contractAddress,
                contractName: donationContractName,
                functionName: 'donate-to-campaign',
                functionArgs: [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$values$2f$intCV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uintCV"])(campaignId),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$values$2f$intCV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uintCV"])(amountMicroSTX),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$values$2f$stringCV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stringUtf8CV"])(message || '')
                ],
                postConditionMode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PostConditionMode"].Allow,
                anchorMode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["AnchorMode"].Any,
                onFinish: (data)=>{
                    console.log('Donation successful:', data);
                },
                onCancel: ()=>{
                    console.log('Donation cancelled');
                }
            });
        } catch (err) {
            console.error('Donation error:', err);
            setError('Failed to make donation');
            throw err;
        } finally{
            setLoading(false);
        }
    };
    const makeDonation = donateToCampaign;
    const withdrawFunds = async (campaignId)=>{
        if (!isConnected) throw new Error('Wallet not connected');
        setLoading(true);
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$connect$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["openContractCall"])({
                network,
                contractAddress,
                contractName: donationContractName,
                functionName: 'withdraw-funds',
                functionArgs: [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$clarity$2f$values$2f$intCV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uintCV"])(campaignId)
                ],
                postConditionMode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PostConditionMode"].Allow,
                anchorMode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stacks$2f$transactions$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["AnchorMode"].Any,
                onFinish: (data)=>{
                    console.log('Withdrawal successful:', data);
                },
                onCancel: ()=>{
                    console.log('Withdrawal cancelled');
                }
            });
        } catch (err) {
            console.error('Withdrawal error:', err);
            setError('Failed to withdraw funds');
            throw err;
        } finally{
            setLoading(false);
        }
    };
    const value = {
        isConnected,
        userData,
        userSession,
        connect,
        disconnect,
        createCampaign,
        donateToCampaign,
        makeDonation,
        withdrawFunds,
        loading,
        error
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(WalletContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/context/WalletContext.tsx",
        lineNumber: 217,
        columnNumber: 5
    }, this);
};
}}),
"[project]/src/components/ui/Providers.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Providers": (()=>Providers)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DevnetWalletProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/DevnetWalletProvider.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$WalletContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/WalletContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/query-core/build/modern/queryClient.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
// import { HiroWalletProvider } from "../HiroWalletProvider"; // Temporarily disabled due to @stacks/connect dependency issues
const queryClient = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QueryClient"]();
function Providers({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QueryClientProvider"], {
        client: queryClient,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$WalletContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WalletProvider"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DevnetWalletProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DevnetWalletProvider"], {
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Providers.tsx",
                lineNumber: 15,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ui/Providers.tsx",
            lineNumber: 13,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Providers.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/src/components/DevnetWalletButton.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "DevnetWalletButton": (()=>DevnetWalletButton),
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$devnet$2d$wallet$2d$context$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/devnet-wallet-context.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
const DevnetWalletButton = ({ className = '' })=>{
    const { currentWallet, setCurrentWallet } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$devnet$2d$wallet$2d$context$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDevnetWallet"])();
    const [showDropdown, setShowDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleWalletSelect = (wallet)=>{
        setCurrentWallet(wallet);
        setShowDropdown(false);
    };
    const handleDisconnect = ()=>{
        setCurrentWallet(null);
        setShowDropdown(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setShowDropdown(!showDropdown),
                className: `px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${currentWallet ? 'bg-green-500 hover:bg-green-600 text-white' : 'bg-blue-500 hover:bg-blue-600 text-white'} ${className}`,
                children: currentWallet ? `${currentWallet.label} (${currentWallet.stxAddress.slice(0, 6)}...${currentWallet.stxAddress.slice(-4)})` : 'Connect Devnet Wallet'
            }, void 0, false, {
                fileName: "[project]/src/components/DevnetWalletButton.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            showDropdown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-2",
                    children: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$devnet$2d$wallet$2d$context$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["devnetWallets"].map((wallet)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleWalletSelect(wallet),
                                className: "w-full text-left px-3 py-2 rounded hover:bg-gray-100 text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-medium",
                                        children: wallet.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DevnetWalletButton.tsx",
                                        lineNumber: 51,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-gray-500 text-xs",
                                        children: wallet.stxAddress
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DevnetWalletButton.tsx",
                                        lineNumber: 52,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, wallet.stxAddress, true, {
                                fileName: "[project]/src/components/DevnetWalletButton.tsx",
                                lineNumber: 46,
                                columnNumber: 15
                            }, this)),
                        currentWallet && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                                    className: "my-2"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/DevnetWalletButton.tsx",
                                    lineNumber: 57,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleDisconnect,
                                    className: "w-full text-left px-3 py-2 rounded hover:bg-red-50 text-red-600 text-sm",
                                    children: "Disconnect"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/DevnetWalletButton.tsx",
                                    lineNumber: 58,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/DevnetWalletButton.tsx",
                    lineNumber: 44,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/DevnetWalletButton.tsx",
                lineNumber: 43,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/DevnetWalletButton.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = DevnetWalletButton;
}}),
"[project]/src/components/ConnectWalletButton.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ConnectWalletButton": (()=>ConnectWalletButton),
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
'use client';
;
const ConnectWalletButton = ({ className = '', children = 'Connect Wallet', variant = 'primary', size = 'md', ...props })=>{
    const handleClick = ()=>{
        // Simplified wallet connection for now
        console.log('Connect wallet clicked');
    };
    const baseClasses = 'font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
    const variantClasses = {
        primary: 'bg-blue-500 hover:bg-blue-600 text-white focus:ring-blue-500',
        secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-900 focus:ring-gray-500'
    };
    const sizeClasses = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-6 py-3 text-lg'
    };
    const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: classes,
        onClick: handleClick,
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ConnectWalletButton.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = ConnectWalletButton;
}}),
"[project]/src/components/Navbar.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Navbar": (()=>Navbar)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DevnetWalletButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/DevnetWalletButton.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ConnectWalletButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ConnectWalletButton.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const Navbar = ()=>{
    // For now, let's just use ConnectWalletButton
    const isDev = ("TURBOPACK compile-time value", "development") === 'development';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "bg-white shadow-sm",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto max-w-7xl",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between h-16 items-center px-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-md border-2 border-gray-700 text-xl font-bold w-12 h-12 flex justify-center items-center text-gray-900",
                                children: "♦"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 16,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "no-underline",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-lg font-bold text-gray-900 ml-4",
                                    children: "Donation Tracker"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 20,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 19,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Navbar.tsx",
                        lineNumber: 15,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: ("TURBOPACK compile-time truthy", 1) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DevnetWalletButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DevnetWalletButton"], {}, void 0, false, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 27,
                            columnNumber: 15
                        }, this) : ("TURBOPACK unreachable", undefined)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Navbar.tsx",
                        lineNumber: 25,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Navbar.tsx",
                lineNumber: 14,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.tsx",
            lineNumber: 13,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Navbar.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
};
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__3c4aeb45._.js.map
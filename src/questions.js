export const questions = {
    english: [
        {
            id: 1,
            scenario: "You receive a text message saying you've won 50,000 KSH from Safaricom. To claim it, click this link and enter your M-Pesa PIN.",
            question: "What should you do?",
            options: [
                { text: "Click the link immediately - I need the money!", correct: false, explanation: "This is a scam! Safaricom will never ask for your PIN via text." },
                { text: "Ignore the message and report it as spam", correct: true, explanation: "Correct! This is a common M-Pesa scam in Kenya. Never share your PIN." },
                { text: "Forward it to friends so they can also win", correct: false, explanation: "No! This spreads the scam to more people." },
                { text: "Call the number back to verify", correct: false, explanation: "Don't engage with scammers. Official communications come through verified channels." }
            ]
        },
        {
            id: 2,
            scenario: "A stranger on WhatsApp claims to be a job recruiter offering a well-paying job in Nairobi. They ask for your ID number and bank details upfront.",
            question: "What's the best response?",
            options: [
                { text: "Send all details immediately", correct: false, explanation: "Never share personal information with strangers online!" },
                { text: "Ask to meet in person first at their office", correct: true, explanation: "Good thinking! Legitimate employers have offices and meet candidates properly." },
                { text: "Send just the ID number for now", correct: false, explanation: "Even sharing your ID number with strangers is risky." },
                { text: "Ask them to send money first as proof", correct: false, explanation: "This isn't how real job interviews work." }
            ]
        },
        {
            id: 3,
            scenario: "You want to create a password for your email account that you'll use for university applications.",
            question: "Which password is strongest?",
            options: [
                { text: "password123", correct: false, explanation: "Too simple! Hackers can guess this easily." },
                { text: "Garissa2024!", correct: true, explanation: "Great! It has letters, numbers, and symbols. Mix of personal and secure." },
                { text: "12345678", correct: false, explanation: "This is one of the worst passwords ever!" },
                { text: "myname", correct: false, explanation: "Personal information makes weak passwords." }
            ]
        },
        {
            id: 4,
            scenario: "You're using a public Wi-Fi at a café in town to check your online banking.",
            question: "What's the safest approach?",
            options: [
                { text: "Go ahead - it's free internet!", correct: false, explanation: "Public Wi-Fi isn't secure for sensitive activities like banking." },
                { text: "Wait and use your mobile data instead", correct: true, explanation: "Perfect! Mobile data is much safer for banking than public Wi-Fi." },
                { text: "Use it but log out quickly", correct: false, explanation: "The damage can happen instantly on unsecured networks." },
                { text: "Ask the café owner if it's safe", correct: false, explanation: "Even the café owner can't guarantee the network's security." }
            ]
        },
        {
            id: 5,
            scenario: "Someone you don't know well asks you to meet them alone after chatting online for a week.",
            question: "What's the safest choice?",
            options: [
                { text: "Meet them in a private location", correct: false, explanation: "Never meet online strangers alone in private places!" },
                { text: "Bring a trusted friend to a public place", correct: true, explanation: "Smart! Always meet online contacts in public with someone you trust." },
                { text: "Meet them but tell no one", correct: false, explanation: "Always tell someone where you're going!" },
                { text: "Video call first, then meet alone", correct: false, explanation: "Video calls help verify identity, but still meet in public with backup." }
            ]
        }
    ],
    swahili: [
        {
            id: 1,
            scenario: "Umepokea ujumbe wa simu unasema umeshinda KSH 50,000 kutoka Safaricom. Ili kupokea, bofya kiungo hiki na uingize nambari yako ya siri ya M-Pesa.",
            question: "Unapaswa kufanya nini?",
            options: [
                { text: "Bofya kiungo mara moja - ninahitaji pesa!", correct: false, explanation: "Hii ni udanganyifu! Safaricom haitawahi kuomba PIN yako kwa ujumbe." },
                { text: "Puuza ujumbe na uripoti kama spam", correct: true, explanation: "Sawa! Huu ni mdanganyifu wa kawaida wa M-Pesa Kenya. Usishiriki PIN yako kamwe." },
                { text: "Peleka kwa marafiki ili nao washinde", correct: false, explanation: "Hapana! Hii inasambaza udanganyifu kwa watu zaidi." },
                { text: "Piga simu kumhakikishia", correct: false, explanation: "Usiungane na wadanganyifu. Maongezi rasmi hutoka kwa njia zilizothibitishwa." }
            ]
        },
        {
            id: 2,
            scenario: "Mtu usiyemfahamu kwenye WhatsApp anadai kuwa mtoa ajira akiahidi kazi nzuri jijini Nairobi. Anakutaka utoe nambari ya kitambulisho na maelezo ya benki mara moja.",
            question: "Jibu sahihi ni lipi?",
            options: [
                { text: "Tuma maelezo yote mara moja", correct: false, explanation: "Usiwahi kushiriki taarifa binafsi na watu usiowajua mtandaoni!" },
                { text: "Omba mkutane ana kwa ana kwanza ofisini kwao", correct: true, explanation: "Vizuri! Waajiri halali wana ofisi na hukutana na wagombea rasmi." },
                { text: "Tuma nambari ya kitambulisho pekee kwa sasa", correct: false, explanation: "Hata kushiriki nambari ya kitambulisho na watu wasiojulikana ni hatari." },
                { text: "Mwambie atume pesa kwanza kama uthibitisho", correct: false, explanation: "Hivyo si jinsi mahojiano halisi ya kazi yanavyofanywa." }
            ]
        },
        {
            id: 3,
            scenario: "Unataka kuunda nenosiri la akaunti yako ya barua pepe ambayo utatumia kuomba chuo kikuu.",
            question: "Nenosiri lipi ni imara zaidi?",
            options: [
                { text: "password123", correct: false, explanation: "Rahisi mno! Wadukuzi wanaweza kulipatia kwa urahisi." },
                { text: "Garissa2024!", correct: true, explanation: "Vizuri! Lina herufi, nambari, na alama. Mchanganyiko salama." },
                { text: "12345678", correct: false, explanation: "Hili ni moja ya manenosiri mabaya zaidi!" },
                { text: "jinalangu", correct: false, explanation: "Taarifa binafsi hufanya nenosiri liwe dhaifu." }
            ]
        },
        {
            id: 4,
            scenario: "Unatumia Wi-Fi ya umma katika kahawa mjini kuangalia akaunti yako ya benki mtandaoni.",
            question: "Njia salama zaidi ni ipi?",
            options: [
                { text: "Endelea - ni intaneti ya bure!", correct: false, explanation: "Wi-Fi ya umma si salama kwa shughuli nyeti kama benki." },
                { text: "Subiri utumie data ya simu yako badala yake", correct: true, explanation: "Sawa kabisa! Data ya simu ni salama zaidi kwa benki kuliko Wi-Fi ya umma." },
                { text: "Itumie lakini uondoke haraka", correct: false, explanation: "Uharibifu unaweza kutokea mara moja kwenye mtandao usio salama." },
                { text: "Muulize mmiliki wa kahawa kama ni salama", correct: false, explanation: "Hata mmiliki wa kahawa hawezi kuthibitisha usalama wa mtandao." }
            ]
        },
        {
            id: 5,
            scenario: "Mtu usiyemfahamu vizuri anakualika mkutane peke yenu baada ya kuzungumza mtandaoni kwa wiki moja.",
            question: "Chaguo salama zaidi ni lipi?",
            options: [
                { text: "Kutana naye mahali pa faragha", correct: false, explanation: "Usiwahi kukutana na watu wa mtandaoni peke yako sehemu za faragha!" },
                { text: "Nenda na rafiki unayemwamini sehemu ya umma", correct: true, explanation: "Bora! Kila mara kutana na watu wa mtandaoni hadharani ukiwa na mtu unayemwamini." },
                { text: "Kutana naye bila kumwambia yeyote", correct: false, explanation: "Kila mara mwambie mtu unakoenda!" },
                { text: "Pige simu ya video kwanza, kisha mkutane peke yenu", correct: false, explanation: "Simu ya video husaidia kuthibitisha utambulisho, lakini bado kutana sehemu za umma ukiwa na mtu wa kuaminika." }
            ]
        }
    ]
};
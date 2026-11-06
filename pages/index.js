import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Maximize Your Medical Proof For Full Insurance Payout | Car Accident Diagnostics</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/og-image.jpeg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/og-image.jpeg" />
        <meta name="description" content="Maximize your medical proof for full insurance payout. Objective MRI diagnostics, spinal diagnostic charts, and bulletproof reports for car accident injury claims." />
        <meta property="og:title" content="Maximize Your Medical Proof For Full Insurance Payout" />
        <meta property="og:description" content="Objective medical diagnostics that force insurance companies to pay big bucks for your car accident claim." />
        <meta property="og:image" content="/og-image.jpeg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Maximize Your Medical Proof For Full Insurance Payout" />
        <meta name="twitter:description" content="Objective medical diagnostics that force insurance companies to pay big bucks for your car accident claim." />
        <meta name="twitter:image" content="/og-image.jpeg" />
        <script src="https://cdn.tailwindcss.com"></script>
        <script src="https://cdn.trkbid.com/at.js" data-key="dss1052"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,700;0,800;0,900;1,400;1,800&family=Teko:wght@600;700&display=swap" rel="stylesheet" />
      </Head>
      <LandingPage />
    </>
  );
}

function LandingPage() {
  return (
    <div dangerouslySetInnerHTML={{ __html: pageHtml }} />
  );
}

const pageHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Maximize Your Medical Proof For Full Insurance Payout | Car Accident Diagnostics</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,700;0,800;0,900;1,400;1,800&family=Teko:wght@600;700&display=swap" rel="stylesheet">
    
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        frostIce: '#00F2FE',
                        frostCyan: '#06B6D4',
                        frostBlue: '#3B82F6',
                        frostNavy: '#0F172A',
                        frostCard: '#1E293B',
                        frostBorder: '#38BDF8',
                        clinicalWhite: '#FFFFFF',
                        clinicalLight: '#F1F5F9',
                        goldGlow: '#FFC837'
                    },
                    fontFamily: {
                        sans: ['Montserrat', 'sans-serif'],
                        teko: ['Teko', 'sans-serif']
                    }
                }
            }
        }
    </script>
    <style>
        .gold-gradient-text {
            background: linear-gradient(180deg, #FFF6BD 0%, #FFD700 40%, #E67E22 80%, #996515 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            filter: drop-shadow(0px 2px 4px rgba(0,0,0,0.8));
        }
        
        .frost-gradient-text {
            background: linear-gradient(180deg, #00F2FE 0%, #0284C7 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        /* === NEW MEDICAL WHITE/BLACK BUTTONS (replacing orange/gold) === */
        /* 1.5x taller with bigger text */
        .medical-btn {
            background: linear-gradient(180deg, #FFFFFF 0%, #F1F5F9 50%, #E2E8F0 100%);
            border: 2px solid #0F172A;
            color: #0F172A;
            box-shadow: 0 0 15px rgba(15,23,42,0.15), inset 0 1px 0 rgba(255,255,255,0.9);
            transition: all 0.2s ease-in-out;
            position: relative;
            overflow: hidden;
            font-size: 1.15rem;
            padding-top: 1.5rem;
            padding-bottom: 1.5rem;
            font-weight: 900;
        }
        .medical-btn:hover {
            transform: translateY(-2px) scale(1.02);
            box-shadow: 0 0 25px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,1);
            background: linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 50%, #F8FAFC 100%);
        }

        .medical-btn::after {
            content: '';
            position: absolute;
            top: -50%;
            left: -60%;
            width: 40%;
            height: 200%;
            background: linear-gradient(60deg, rgba(255,255,255,0) 0%, rgba(15,23,42,0.1) 50%, rgba(255,255,255,0) 100%);
            transform: rotate(25deg);
            animation: ctaShimmer 12.8s infinite;
        }

        @keyframes ctaShimmer {
            0% { left: -60%; }
            22% { left: 140%; }
            100% { left: 140%; }
        }

        @keyframes frostPulse {
            0%, 100% { transform: scale(1); box-shadow: 0 0 15px rgba(2,132,199,0.4); }
            50% { transform: scale(1.03); box-shadow: 0 0 35px rgba(0,242,254,0.8); }
        }
        .animate-frost-pulse {
            animation: frostPulse 10.4s infinite ease-in-out;
        }

        .xray-glow {
            box-shadow: 0 0 30px rgba(0,242,254,0.25), inset 0 0 15px rgba(2,132,199,0.3);
            border: 2px solid rgba(0,242,254,0.6);
        }

        .book-container { perspective: 1000px; }
        .book-3d {
            transform: rotateY(-18deg) rotateX(4deg);
            box-shadow: -15px 15px 35px rgba(15,23,42,0.6), 0 0 25px rgba(0,242,254,0.3);
            transition: transform 0.4s ease;
        }
        .book-3d:hover { transform: rotateY(-3deg) rotateX(2deg); }

        @keyframes laserScan {
            0% { top: 0%; opacity: 0.8; }
            50% { top: 90%; opacity: 1; }
            100% { top: 0%; opacity: 0.8; }
        }
        .laser-line {
            position: absolute; left: 0; right: 0; height: 2px;
            background: #00F2FE; box-shadow: 0 0 12px #00F2FE, 0 0 25px #38BDF8;
            animation: laserScan 12s infinite ease-in-out;
        }

        @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
        }
        .animate-marquee { display: flex; width: 200%; animation: marquee 72s linear infinite; }
    </style>
</head>
<body class="bg-clinicalWhite text-frostNavy font-sans antialiased selection:bg-frostCyan selection:text-white pb-24 md:pb-0">

    <!-- POPUP OVERLAY (shows immediately on page load) -->
    <div id="popupOverlay" class="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
        <div id="popupCard" class="bg-frostNavy border-2 border-frostCyan rounded-2xl shadow-2xl max-w-md w-full p-6 md:p-8 relative text-white transition-opacity duration-700">

            <!-- PART 1: Medical Proof Summary -->
            <div id="popupPart1">
                <button onclick="closePopup()" class="absolute top-3 right-3 text-slate-400 hover:text-white text-2xl leading-none">&times;</button>
                <div class="text-center mb-5">
                    <i class="fa-solid fa-file-shield text-5xl text-frostCyan"></i>
                    <h3 class="text-2xl font-black uppercase mt-3 tracking-tight">The Medical Proof You Need</h3>
                    <p class="text-xs text-frostIce mt-1 font-bold uppercase tracking-wide">For a Fair Insurance Settlement</p>
                </div>
                <div class="space-y-4 text-sm leading-relaxed text-slate-200">
                    <p class="font-semibold">
                        Insurance companies do not pay for pain they cannot see. Without objective diagnostic evidence, your claim is treated as minor and settled for pennies. To receive a fair payout, your file must contain:
                    </p>
                    <ul class="space-y-2.5">
                        <li class="flex items-start gap-2.5">
                            <i class="fa-solid fa-circle-check text-frostCyan text-base mt-0.5 shrink-0"></i>
                            <span><strong class="text-white">Objective MRI imaging</strong> documenting spinal disc injury, nerve compression, or soft-tissue damage directly linked to the collision.</span>
                        </li>
                        <li class="flex items-start gap-2.5">
                            <i class="fa-solid fa-circle-check text-frostCyan text-base mt-0.5 shrink-0"></i>
                            <span><strong class="text-white">Detailed diagnostic reports</strong> from a qualified medical specialist — not generic ER discharge notes that say "you're fine."</span>
                        </li>
                        <li class="flex items-start gap-2.5">
                            <i class="fa-solid fa-circle-check text-frostCyan text-base mt-0.5 shrink-0"></i>
                            <span><strong class="text-white">A documented treatment protocol</strong> showing ongoing medical necessity, forcing the adjuster to justify any lowball offer in writing.</span>
                        </li>
                    </ul>
                    <p class="font-semibold border-l-2 border-frostCyan pl-3 italic">
                        Without this proof, your attorney has no leverage. With it, the insurance company must pay — or face it in court.
                    </p>
                </div>
                <div class="flex justify-end mt-6">
                    <button onclick="advanceToPart2()" class="medical-btn px-6 py-3 rounded-lg text-base uppercase tracking-wider flex items-center gap-2 animate-frost-pulse">
                        <span>Continue</span>
                        <i class="fa-solid fa-arrow-right text-lg"></i>
                    </button>
                </div>
            </div>

            <!-- PART 2: The Form (hidden initially) -->
            <div id="popupPart2" class="hidden">
                <button onclick="closePopup()" class="absolute top-3 right-3 text-slate-400 hover:text-white text-2xl leading-none">&times;</button>
                <div class="text-center mb-5">
                    <i class="fa-solid fa-file-waveform text-5xl text-frostCyan"></i>
                    <h3 class="text-2xl font-black uppercase mt-3 tracking-tight">Get Your Big Medical Settlement</h3>
                    <p class="text-xs text-frostIce mt-1">Fill this out now to get maximum medical proof for your claim.</p>
                </div>
                <form id="popupForm" class="space-y-3" autocomplete="on">
                    <div>
                        <label for="popupName" class="block text-xs font-bold text-slate-300 uppercase mb-1">Full Name</label>
                        <input type="text" id="popupName" name="name" placeholder="John Doe" required autocomplete="name" class="w-full bg-slate-900 border border-frostCyan/50 rounded-lg p-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-frostIce">
                    </div>
                    <div>
                        <label for="popupPhone" class="block text-xs font-bold text-slate-300 uppercase mb-1">Cellphone</label>
                        <input type="tel" id="popupPhone" name="tel" placeholder="(555) 000-0000" required autocomplete="tel" class="w-full bg-slate-900 border border-frostCyan/50 rounded-lg p-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-frostIce">
                    </div>
                    <div>
                        <label for="popupEmail" class="block text-xs font-bold text-slate-300 uppercase mb-1">Email</label>
                        <input type="email" id="popupEmail" name="email" placeholder="you@example.com" required autocomplete="email" class="w-full bg-slate-900 border border-frostCyan/50 rounded-lg p-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-frostIce">
                    </div>
                    <button type="submit" class="w-full medical-btn py-3.5 rounded-lg text-lg uppercase tracking-wider shadow-xl flex justify-center items-center gap-2 animate-frost-pulse">
                        <i class="fa-solid fa-bolt text-xl"></i>
                        <span>Submit & Get Paid</span>
                    </button>
                </form>
                <div id="popupSuccess" class="hidden text-center py-8 space-y-3">
                    <i class="fa-solid fa-circle-check text-5xl text-frostIce"></i>
                    <h4 class="text-xl font-black text-white uppercase">Request Received!</h4>
                    <p class="text-xs text-slate-300">Our medical team will contact you shortly to start your evaluation.</p>
                    <button onclick="closePopup()" class="medical-btn px-6 py-2 rounded-lg text-base uppercase mt-2">Close</button>
                </div>
            </div>

        </div>
    </div>

    <!-- Top Laser Alert Bar -->
    <div class="bg-frostNavy text-white font-black text-center py-2 px-3 text-xs md:text-sm uppercase tracking-wider shadow-md flex justify-center items-center gap-2 border-b border-frostCyan/50">
        <i class="fa-solid fa-bolt text-frostIce animate-pulse"></i>
        <span>WITHOUT OBJECTIVE MEDICAL PROOF, INSURANCE PAYS PENNIES. WE UNLOCK FULL CLAIM VALUE!</span>
    </div>

    <!-- Sticky Header -->
    <header class="bg-clinicalWhite/95 backdrop-blur border-b border-slate-200 sticky top-0 z-40 py-3 px-4 shadow-sm">
        <div class="max-w-6xl mx-auto flex justify-between items-center">
            <div class="flex items-center gap-2">
                <i class="fa-solid fa-file-waveform text-frostCyan text-3xl"></i>
                <div class="leading-none">
                    <span class="text-xs text-slate-500 font-bold block tracking-widest uppercase">Medical Proof Network</span>
                    <span class="text-lg font-black tracking-tight text-frostNavy">INJURY<span class="text-frostCyan">PROOF</span></span>
                </div>
            </div>
            
            <!-- Doctor Login button added top-right -->
            <div class="flex items-center gap-3">
                <a href="/dashboard" class="medical-btn px-6 py-2 rounded-lg text-base flex items-center gap-2 uppercase tracking-wide">
                    <i class="fa-solid fa-user-doctor text-xl"></i>
                    <span>Doctor Login</span>
                </a>
                <a href="tel:13104889814" onclick="handleCallClick(event)" class="medical-btn px-4 py-2 rounded-lg text-base flex items-center gap-2 uppercase tracking-wide hidden sm:flex">
                    <i class="fa-solid fa-phone-volume text-xl animate-pulse"></i>
                    <span class="hidden sm:inline">CALL OUR MEDICAL TEAM:</span>
                    <span>(310) 488-9814</span>
                </a>
            </div>
        </div>
    </header>

    <!-- Urgent Context Banner -->
    <section class="bg-clinicalLight border-b border-slate-200 py-2 overflow-hidden">
        <div class="animate-marquee whitespace-nowrap text-xs md:text-sm text-frostNavy font-extrabold tracking-wider uppercase">
            <span class="mx-4"><i class="fa-solid fa-circle-check text-frostCyan"></i> MAXIMUM MEDICAL PROOF</span> •
            <span class="mx-4"><i class="fa-solid fa-circle-check text-frostCyan"></i> CAR ACCIDENTS</span> •
            <span class="mx-4"><i class="fa-solid fa-circle-check text-frostCyan"></i> HIGH-IMPACT COLLISIONS</span> •
            <span class="mx-4"><i class="fa-solid fa-circle-check text-frostCyan"></i> THIS DOCTOR WROTE THE BOOK</span> •
            <span class="mx-4"><i class="fa-solid fa-circle-check text-frostCyan"></i> FORCE BIG INSURANCE PAYOUTS</span> •
            <span class="mx-4"><i class="fa-solid fa-circle-check text-frostCyan"></i> MAXIMUM MEDICAL PROOF</span>
        </div>
    </section>

    <!-- HERO SECTION -->
    <section class="relative py-8 md:py-14 px-4 overflow-hidden bg-gradient-to-b from-slate-50 via-clinicalWhite to-slate-100 border-b border-slate-200">
        <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-frostCyan/10 rounded-full blur-3xl pointer-events-none"></div>

        <div class="max-w-6xl mx-auto grid md:grid-cols-12 gap-8 items-center">
            
            <div class="md:col-span-7 space-y-5 text-center md:text-left">
                <div class="inline-flex items-center gap-2 bg-frostNavy text-white border border-frostCyan px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-md">
                    <i class="fa-solid fa-microscope text-frostIce"></i> Precision Medical Diagnostics = Maximum Dollars
                </div>
                
                <h1 class="text-3xl sm:text-4xl md:text-5xl font-black uppercase leading-none tracking-tight text-frostNavy">
                    MAXIMIZE YOUR MEDICAL PROOF <br class="hidden sm:inline"/>
                    <span class="frost-gradient-text block text-4xl sm:text-5xl md:text-6xl mt-1">FOR FULL INSURANCE PAYOUT</span>
                </h1>

                <div class="relative max-w-sm mx-auto md:hidden my-6 rounded-2xl overflow-hidden bg-frostNavy xray-glow p-4 text-white">
                    <div class="laser-line"></div>
                    <div class="flex justify-between items-center mb-2">
                        <span class="text-frostIce font-bold text-xs uppercase"><i class="fa-solid fa-dna"></i> MRI Spine Scan Diagnostics</span>
                        <span class="bg-frostCyan text-white text-xs font-black px-2 py-0.5 rounded uppercase">Verified Proof</span>
                    </div>
                    <div class="relative h-44 bg-black rounded-lg flex items-center justify-center border border-frostCyan/40 overflow-hidden">
                        <i class="fa-solid fa-bone text-8xl text-slate-700/50 absolute"></i>
                        <div class="text-center z-10 bg-slate-900/80 p-3 rounded border border-frostIce/40">
                            <span class="text-3xl font-black text-frostIce">$ BIG BUCKS</span>
                            <p class="text-[10px] font-bold text-slate-300 uppercase tracking-wider mt-1">Proof Discovers Hidden Cash Value</p>
                        </div>
                    </div>
                </div>

                <div class="bg-clinicalWhite border-l-4 border-frostCyan p-4 rounded-r-lg text-left shadow-md border border-slate-200">
                    <h2 class="text-lg md:text-xl font-extrabold text-frostNavy uppercase tracking-wide">THIS DOCTOR WROTE THE BOOK ON CAR ACCIDENT INJURIES</h2>
                    <p class="text-slate-600 text-xs md:text-sm mt-1">Insurance adjusters count on lazy lawyers who settle cheap. Detailed medical documentation forces them to pay big bucks for your car accident.</p>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left pt-2">
                    <div class="flex items-center gap-3 bg-clinicalWhite p-3 rounded-lg border border-slate-200 shadow-sm">
                        <i class="fa-solid fa-x-ray text-2xl text-frostCyan"></i>
                        <span class="text-xs sm:text-sm font-bold text-frostNavy">Objective MRI Scans & Spinal Diagnostic Charts</span>
                    </div>
                    <div class="flex items-center gap-3 bg-clinicalWhite p-3 rounded-lg border border-slate-200 shadow-sm">
                        <i class="fa-solid fa-file-contract text-2xl text-amber-500"></i>
                        <span class="text-xs sm:text-sm font-bold text-frostNavy">Bulletproof Reports Insurance Cannot Deny</span>
                    </div>
                    <div class="flex items-center gap-3 bg-clinicalWhite p-3 rounded-lg border border-slate-200 shadow-sm">
                        <i class="fa-solid fa-money-bill-wave text-2xl text-frostCyan"></i>
                        <span class="text-xs sm:text-sm font-bold text-frostNavy">Unlock Maximum Payout for Severe Soft-Tissue Pain</span>
                    </div>
                    <div class="flex items-center gap-3 bg-clinicalWhite p-3 rounded-lg border border-slate-200 shadow-sm">
                        <i class="fa-solid fa-notes-medical text-2xl text-amber-500"></i>
                        <span class="text-xs sm:text-sm font-bold text-frostNavy">0 Out-Of-Pocket Expenses On Approved Claims</span>
                    </div>
                </div>
            </div>

            <div class="md:col-span-5">
                
                <div class="bg-red-600 text-white font-black text-center py-2.5 px-4 rounded-t-2xl uppercase tracking-widest text-lg sm:text-xl shadow-lg flex items-center justify-center gap-2 border-b-2 border-red-700">
                    <i class="fa-solid fa-triangle-exclamation text-amber-300 animate-bounce"></i>
                    <span>CAR ACCIDENT?</span>
                </div>

                <div class="bg-frostNavy border-2 border-t-0 border-frostCyan rounded-b-2xl p-5 md:p-6 shadow-2xl relative text-white">
                    <div class="text-center mb-5">
                        <h3 class="text-2xl font-black uppercase text-white tracking-tight">FILL OUT THIS FORM</h3>
                        <p class="text-xs text-frostIce mt-1">Get objective medical proof to force maximum payout.</p>
                    </div>

                    <form id="leadForm" class="space-y-4" autocomplete="on">
                        
                        <div class="flex items-center justify-between text-xs font-bold text-frostIce mb-2 border-b border-slate-700 pb-2">
                            <span id="stepLabel">STEP 1 OF 2: INJURY STATUS</span>
                            <div class="flex gap-1">
                                <div id="dot1" class="w-2.5 h-2.5 rounded-full bg-frostIce"></div>
                                <div id="dot2" class="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                            </div>
                        </div>

                        <div id="step1" class="space-y-3">
                            <label class="block text-xs font-bold text-slate-300 uppercase">Current Medical / Injury Status:</label>
                            <div class="space-y-2">
                                <button type="button" onclick="selectInjury('Severe Pain / Need Diagnostic Scans')" class="w-full text-left p-3 border border-frostCyan/40 bg-frostCard hover:bg-slate-700 rounded-lg text-xs font-bold text-white flex justify-between items-center">
                                    <span>Severe Pain - Need MRI / Diagnostic Proof</span>
                                    <i class="fa-solid fa-chevron-right text-frostIce"></i>
                                </button>
                                <button type="button" onclick="selectInjury('Moderate Pain / Neck & Back Stiffness')" class="w-full text-left p-3 border border-frostCyan/40 bg-frostCard hover:bg-slate-700 rounded-lg text-xs font-bold text-white flex justify-between items-center">
                                    <span>Moderate Neck / Spinal Pain</span>
                                    <i class="fa-solid fa-chevron-right text-frostIce"></i>
                                </button>
                                <button type="button" onclick="selectInjury('Standard Doctor Dismissed Pain')" class="w-full text-left p-3 border border-frostCyan/40 bg-frostCard hover:bg-slate-700 rounded-lg text-xs font-bold text-white flex justify-between items-center">
                                    <span>ER Doctor Said Fine, But Still In Pain</span>
                                    <i class="fa-solid fa-chevron-right text-frostIce"></i>
                                </button>
                            </div>
                        </div>

                        <div id="step2" class="space-y-3 hidden">
                            <label class="block text-xs font-bold text-slate-300 uppercase">Where should our medical team contact you?</label>
                            <input type="text" id="fullName" name="name" placeholder="Your Full Name" required autocomplete="name" class="w-full bg-slate-900 border border-frostCyan/50 rounded-lg p-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-frostIce">
                            <input type="tel" id="phoneNumber" name="tel" placeholder="Phone Number (For Fast Callback)" required autocomplete="tel" class="w-full bg-slate-900 border border-frostCyan/50 rounded-lg p-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-frostIce">
                            
                            <button type="submit" class="w-full medical-btn py-3.5 rounded-lg text-lg uppercase tracking-wider shadow-xl flex justify-center items-center gap-2 mt-2 animate-frost-pulse">
                                <span>GET PAID NOW</span>
                                <i class="fa-solid fa-arrow-right text-xl"></i>
                            </button>
                        </div>

                    </form>

                    <div class="mt-4 pt-3 border-t border-slate-700 text-center">
                        <p class="text-xs text-slate-300 mb-1">Need fast answers?</p>
                        <a href="tel:13104889814" onclick="handleCallClick(event)" class="text-frostIce hover:text-white font-extrabold text-sm flex items-center justify-center gap-1 group">
                            <i class="fa-solid fa-phone group-hover:animate-bounce"></i> (Call Our Medical Desk Now)
                        </a>
                    </div>
                </div>
            </div>

        </div>
    </section>

    <!-- AGGRESSIVE TRUTH SECTION -->
    <section class="py-12 bg-clinicalLight border-t border-b border-slate-200 relative">
        <div class="max-w-5xl mx-auto px-4">
            
            <div class="text-center max-w-3xl mx-auto mb-10">
                <span class="text-xs font-bold text-white bg-frostNavy px-3.5 py-1 rounded-full uppercase tracking-widest font-black shadow">
                    UNFILTERED REALITY
                </span>
                <h2 class="text-3xl sm:text-4xl font-black uppercase mt-3 text-frostNavy leading-tight">
                    THE HARD TRUTH — ATTORNEYS ARE LAZY, DON'T LEAVE YOUR SETTLEMENT IN THEIR HANDS
                </h2>
                <p class="text-slate-700 font-semibold text-sm md:text-base mt-2">
                    Most lawyers want an easy 33% check without doing the real work. If you don't have undeniable medical proof, insurance adjusters laugh at your lawyer's demand letters.
                </p>
            </div>

            <div class="grid md:grid-cols-2 gap-6">
                <div class="bg-clinicalWhite p-6 rounded-xl border-2 border-red-200 shadow-md relative">
                    <div class="text-red-600 text-xs font-black uppercase tracking-wider mb-2 flex items-center gap-2">
                        <i class="fa-solid fa-skull-crossbones"></i> What Lazy Attorneys Do
                    </div>
                    <h3 class="text-xl font-bold text-frostNavy mb-2">Settle Low For Quick Checks</h3>
                    <ul class="space-y-3 text-xs md:text-sm text-slate-700 font-semibold">
                        <li class="flex items-start gap-2"><i class="fa-solid fa-xmark text-red-500 mt-1"></i> They tell you to go to basic physical therapy that produces zero objective imaging proof.</li>
                        <li class="flex items-start gap-2"><i class="fa-solid fa-xmark text-red-500 mt-1"></i> They take the first lowball settlement offer from insurance just to close your file.</li>
                        <li class="flex items-start gap-2"><i class="fa-solid fa-xmark text-red-500 mt-1"></i> They leave thousands of dollars on the table that should have gone straight into your pocket.</li>
                    </ul>
                </div>

                <div class="bg-frostNavy text-white p-6 rounded-xl border-2 border-frostCyan relative shadow-xl">
                    <div class="text-frostIce text-xs font-black uppercase tracking-wider mb-2 flex items-center gap-2">
                        <i class="fa-solid fa-shield-virus"></i> The Medical Proof Solution
                    </div>
                    <h3 class="text-xl font-bold text-white mb-2">Irrefutable Medical Evidence</h3>
                    <ul class="space-y-3 text-xs md:text-sm text-slate-200">
                        <li class="flex items-start gap-2"><i class="fa-solid fa-check text-frostIce mt-1"></i> Objective MRI diagnostics that expose spinal disc herniations and nerve impingement.</li>
                        <li class="flex items-start gap-2"><i class="fa-solid fa-check text-frostIce mt-1"></i> Treatment protocols authored by the doctor who literally wrote the medical handbook.</li>
                        <li class="flex items-start gap-2"><i class="fa-solid fa-check text-frostIce mt-1"></i> Forces insurance companies to pay big bucks because the medical proof is legally unbreakable.</li>
                    </ul>
                </div>
            </div>

            <div class="mt-10 text-center">
                <button onclick="scrollToForm()" class="medical-btn px-8 py-4 rounded-xl text-lg md:text-xl uppercase tracking-wider animate-frost-pulse inline-flex items-center gap-3">
                    <i class="fa-solid fa-file-medical text-2xl"></i>
                    <span>MAXIMIZE YOUR MEDICAL PROOF NOW</span>
                </button>
            </div>

        </div>
    </section>

    <!-- BOOK SHOWCASE SECTION -->
    <section class="py-12 md:py-16 bg-clinicalWhite px-4 relative border-b border-slate-200">
        <div class="max-w-5xl mx-auto">
            <div class="grid md:grid-cols-12 gap-8 items-center">
                
                <div class="md:col-span-5 flex justify-center book-container">
                    <div class="book-3d w-64 md:w-72 bg-gradient-to-br from-frostNavy via-slate-800 to-black rounded-r-lg border-l-8 border-frostCyan p-4 relative overflow-hidden">
                        <div class="border-2 border-frostCyan/50 p-3 h-full flex flex-col justify-between bg-black/40">
                            <div>
                                <span class="text-[10px] font-bold text-frostIce uppercase tracking-widest block text-center">Definitive Medical Standard</span>
                                <h4 class="text-3xl font-black text-white text-center tracking-tight leading-none mt-2">ACCIDENT</h4>
                                <h4 class="text-3xl font-black text-frostIce text-center tracking-tight leading-none">INJURIES</h4>
                                <div class="w-12 h-0.5 bg-frostCyan mx-auto my-3"></div>
                                <p class="text-[10px] text-slate-200 text-center uppercase tracking-wider">The Facts, Treatment and Rehabilitation</p>
                            </div>
                            
                            <div class="mt-8 text-center bg-black/80 p-2 rounded border border-frostCyan/40">
                                <span class="text-[9px] text-slate-400 uppercase block">Authored By</span>
                                <span class="text-xs font-black text-frostIce uppercase tracking-wider">Dr. Giulio Caruso</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="md:col-span-7 space-y-4 text-center md:text-left">
                    <span class="text-xs font-bold text-frostCyan uppercase tracking-widest"><i class="fa-solid fa-book-medical text-amber-500"></i> Medical Industry Manual</span>
                    <h2 class="text-3xl md:text-4xl font-black uppercase text-frostNavy">THIS DOCTOR WROTE THE BOOK ON CAR ACCIDENT INJURIES</h2>
                    <p class="text-slate-700 text-sm md:text-base font-medium">
                        Insurance adjusters spend millions fighting accident claims, but they fold when confronted with diagnostic proof documented using <span class="text-frostNavy font-bold">Dr. Giulio Caruso's published medical protocols</span>.
                    </p>
                    <p class="text-slate-700 text-sm md:text-base font-medium">
                        Without solid medical proof, your lawyer has no leverage. With our diagnostic network, your injury claim is backed by the ultimate clinical authority.
                    </p>

                    <div class="pt-2">
                        <button onclick="scrollToForm()" class="medical-btn px-6 py-3.5 rounded-lg text-lg uppercase tracking-wider animate-frost-pulse flex items-center gap-2">
                            <i class="fa-solid fa-user-doctor text-xl"></i>
                            <span>Get Medical Proof For Big Bucks Settlement</span>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- BOTTOM FORM SECTION -->
    <section id="bottomFormSection" class="py-14 bg-gradient-to-t from-slate-100 via-clinicalWhite to-clinicalWhite border-t-2 border-frostCyan px-4 relative overflow-hidden">
        <div class="max-w-4xl mx-auto">
            <div class="text-center mb-8">
                <span class="text-xs font-bold text-black bg-goldGlow border border-amber-400 px-3 py-1 rounded-full uppercase tracking-wider font-extrabold shadow-sm">
                    <i class="fa-solid fa-triangle-exclamation"></i> Don't Let Insurance Pay Pennies
                </span>
                <h2 class="text-3xl sm:text-4xl md:text-5xl font-black uppercase mt-3 text-frostNavy">
                    FILL OUT THIS FORM
                </h2>
                <p class="text-slate-700 font-semibold text-xs sm:text-sm mt-2 max-w-2xl mx-auto">
                    Maximize medical proof to get paid big bucks for your car accident. Get evaluated by doctors who wrote the book before your attorney settles cheap.
                </p>
            </div>

            <div class="bg-frostNavy text-white border-2 border-frostCyan rounded-2xl p-6 md:p-8 shadow-2xl relative max-w-2xl mx-auto">
                <form id="bottomLeadForm" class="space-y-4" autocomplete="on">
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label for="bFullName" class="block text-xs font-bold text-slate-300 uppercase mb-1">Your Full Name:</label>
                            <input type="text" id="bFullName" name="name" placeholder="John Doe" required autocomplete="name" class="w-full bg-slate-900 border border-frostCyan/50 rounded-lg p-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-frostIce">
                        </div>
                        <div>
                            <label for="bPhoneNumber" class="block text-xs font-bold text-slate-300 uppercase mb-1">Best Phone Number:</label>
                            <input type="tel" id="bPhoneNumber" name="tel" placeholder="(555) 000-0000" required autocomplete="tel" class="w-full bg-slate-900 border border-frostCyan/50 rounded-lg p-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-frostIce">
                        </div>
                    </div>

                    <div>
                        <label for="bNotes" class="block text-xs font-bold text-slate-300 uppercase mb-1">Describe Pain / Needed Diagnostic Scans:</label>
                        <textarea id="bNotes" name="notes" rows="3" placeholder="Spinal pain, neck stiffness, doctor didn't order MRI, etc..." class="w-full bg-slate-900 border border-frostCyan/50 rounded-lg p-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-frostIce"></textarea>
                    </div>

                    <button type="submit" class="w-full medical-btn py-4 rounded-lg text-lg uppercase tracking-wider shadow-2xl flex justify-center items-center gap-2 animate-frost-pulse">
                        <i class="fa-solid fa-bolt text-xl"></i>
                        <span>GET PAID NOW - SUBMIT FREE REVIEW</span>
                    </button>
                </form>

                <div id="bottomSuccess" class="hidden text-center py-8 space-y-3">
                    <i class="fa-solid fa-circle-check text-6xl text-frostIce"></i>
                    <h3 class="text-3xl font-black text-white">MEDICAL REVIEW REQUESTED!</h3>
                    <p class="text-sm text-slate-300">Our medical evaluation coordinator will reach out to you within 5-10 minutes to arrange objective diagnostic testing.</p>
                </div>

                <div class="mt-4 pt-4 border-t border-slate-700 text-center flex flex-col sm:flex-row justify-center items-center gap-3">
                    <span class="text-xs text-slate-300">Need Immediate Assistance?</span>
                    <a href="tel:13104889814" onclick="handleCallClick(event)" class="medical-btn px-4 py-2 rounded-lg text-base uppercase tracking-wider flex items-center gap-2">
                        <i class="fa-solid fa-phone text-lg"></i>
                        <span>CALL OUR DOCTORS: (310) 488-9814</span>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- FOOTER -->
    <footer class="py-8 bg-frostNavy text-slate-400 text-xs text-center border-t border-slate-800 px-4">
        <div class="max-w-4xl mx-auto space-y-3">
            <p class="font-bold text-white uppercase tracking-widest">INJURY PROOF MEDICAL DIAGNOSTIC NETWORK</p>
            <p>
                Disclaimer: Maximize Your Medical Proof For Full Insurance Payout is an educational & medical diagnostic network campaign. We connect injured accident victims with medical diagnostic providers and personal injury legal resources. 0 Out-of-pocket costs on approved lien claims.
            </p>
            <p>© <span id="year"></span> InjuryProof Network. All Rights Reserved.</p>
        </div>
    </footer>

    <!-- MOBILE STICKY BOTTOM BAR -->
    <div class="fixed bottom-0 left-0 right-0 bg-frostNavy border-t border-frostCyan p-3 flex gap-2 md:hidden z-50 backdrop-blur">
        <a href="tel:13104889814" onclick="handleCallClick(event)" class="w-1/2 bg-slate-800 border border-frostCyan/60 text-frostIce font-extrabold py-3 rounded-lg text-xs text-center flex items-center justify-center gap-1 active:scale-95 transition">
            <i class="fa-solid fa-phone"></i> CALL MEDICAL TEAM
        </a>
        <button onclick="scrollToForm()" class="w-1/2 medical-btn py-3 rounded-lg text-base text-center uppercase tracking-wider animate-frost-pulse">
            GET PAID NOW
        </button>
    </div>

    <script>
        document.getElementById('year').innerText = new Date().getFullYear();

        // === DSP Tracker Init ===
        window.addEventListener('DOMContentLoaded', function() {
            if (window.dss1052ActionTracker) {
                dss1052ActionTracker.init();
                // Fire page-load / landing event (eventId: 0)
                dss1052ActionTracker.trackVisit();
            }
        });

        function trackConversion() {
            if (window.dss1052ActionTracker) {
                try { dss1052ActionTracker.trackRegistration(); } catch(e) { console.error('Tracker error:', e); }
            }
        }

        let formData = {
            injuryStatus: '',
            name: '',
            phone: ''
        };

        function selectInjury(status) {
            formData.injuryStatus = status;
            document.getElementById('step1').classList.add('hidden');
            document.getElementById('step2').classList.remove('hidden');
            
            document.getElementById('stepLabel').innerText = 'STEP 2 OF 2: CONTACT INFO';
            document.getElementById('dot2').classList.replace('bg-slate-700', 'bg-frostIce');
        }

        async function handleFormSubmit(e) {
            e.preventDefault();
            formData.name = document.getElementById('fullName').value;
            formData.phone = document.getElementById('phoneNumber').value;

            // Submit to API
            try {
                await fetch('/api/submit-lead', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        name: formData.name,
                        phone: formData.phone,
                        injuryStatus: formData.injuryStatus,
                        source: 'Hero Form'
                    }),
                });
            } catch (err) {
                console.error('Submission error:', err);
            }

            trackConversion();

            const step2 = document.getElementById('step2');
            step2.innerHTML = \`
                <div class="text-center py-6 space-y-3">
                    <i class="fa-solid fa-circle-check text-5xl text-frostIce"></i>
                    <h4 class="text-2xl font-black text-white">EVALUATION REQUESTED!</h4>
                    <p class="text-xs text-slate-300">Our medical team has received your information. A physician assistant will call <strong>\${formData.phone}</strong> within 5-10 minutes.</p>
                    <a href="tel:13104889814" onclick="handleCallClick(event)" class="inline-block medical-btn px-6 py-2.5 rounded-lg text-base uppercase mt-2 animate-frost-pulse">
                        Call Right Now for Immediate Priority
                    </a>
                </div>
            \`;
            document.getElementById('stepLabel').innerText = 'STATUS: CONFIRMED';
        }

        async function handleBottomFormSubmit(e) {
            e.preventDefault();
            var name = document.getElementById('bFullName').value;
            var phone = document.getElementById('bPhoneNumber').value;
            var notes = document.getElementById('bNotes').value;

            // Submit to API
            try {
                await fetch('/api/submit-lead', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        name: name,
                        phone: phone,
                        notes: notes,
                        source: 'Bottom Form'
                    }),
                });
            } catch (err) {
                console.error('Submission error:', err);
            }

            trackConversion();

            document.getElementById('bottomLeadForm').classList.add('hidden');
            document.getElementById('bottomSuccess').classList.remove('hidden');
        }

        function scrollToForm() {
            document.getElementById('leadForm').scrollIntoView({ behavior: 'smooth' });
        }

        function handleCallClick(event) {
            console.log("Call clicked");
            if (window.dss1052ActionTracker) {
                try { dss1052ActionTracker.track({ eventId: 2, once: true }); } catch(e) { console.error('Tracker error:', e); }
            }
        }

        async function handlePopupSubmit(e) {
            e.preventDefault();
            var name = document.getElementById('popupName').value;
            var phone = document.getElementById('popupPhone').value;
            var email = document.getElementById('popupEmail').value;

            // Submit to API
            try {
                await fetch('/api/submit-lead', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        name: name,
                        phone: phone,
                        email: email,
                        injuryStatus: 'I want a big medical settlement',
                        source: 'Popup Form'
                    }),
                });
            } catch (err) {
                console.error('Submission error:', err);
            }

            trackConversion();

            document.getElementById('popupForm').classList.add('hidden');
            document.getElementById('popupSuccess').classList.remove('hidden');
        }

        function closePopup() {
            document.getElementById('popupOverlay').style.display = 'none';
        }

        var popupAdvanced = false;

        function advanceToPart2() {
            if (popupAdvanced) return;
            popupAdvanced = true;
            var card = document.getElementById('popupCard');
            // Fade out to white
            card.classList.remove('bg-frostNavy');
            card.classList.add('bg-white');
            card.style.opacity = '0';
            setTimeout(function() {
                // Swap content
                document.getElementById('popupPart1').classList.add('hidden');
                document.getElementById('popupPart2').classList.remove('hidden');
                // Restore dark card for part 2
                card.classList.remove('bg-white');
                card.classList.add('bg-frostNavy');
                // Fade back in
                card.style.opacity = '0';
                requestAnimationFrame(function() {
                    card.style.opacity = '1';
                });
            }, 700);
        }

        // Auto-advance to part 2 after 7 seconds
        setTimeout(function() {
            if (!popupAdvanced && document.getElementById('popupOverlay').style.display !== 'none') {
                advanceToPart2();
            }
        }, 7000);

        // Wire up the popup form
        document.getElementById('popupForm').addEventListener('submit', handlePopupSubmit);
    </script>
</body>
</html>
`;

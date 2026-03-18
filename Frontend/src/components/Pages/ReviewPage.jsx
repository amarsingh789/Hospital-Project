// import React from 'react'

// const ReviewPage = () => {
//   return (
//     <div>
//       Review
//     </div>
//   )
// }

// export default ReviewPage


// import React from "react";
// import { Star, Quote, Play, ArrowUpRight } from "lucide-react";

// const ReviewPage = () => {
//   // 7 Items banaye hain Grid ko 100% fill karne ke liye
//   const reviews = [
//     {
//       type: "video-card",
//       name: "Rahul Sharma",
//       treatment: "Heart Bypass Recovery",
//       image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&q=80&w=800",
//       text: "The post-op care here is world-class. I was walking within days of my surgery.",
//       // 2 Column Wide, 2 Row Tall (Bada Video Box)
//       size: "md:col-span-2 md:row-span-2 lg:col-span-2 lg:row-span-2 min-h-[400px]", 
//     },
//     {
//       type: "text-card",
//       name: "Sneha Kapoor",
//       treatment: "Orthopedics",
//       rating: 5,
//       text: "After 5 years of knee pain, this clinic gave me my life back. The physiotherapy team is incredibly supportive.",
//       theme: "bg-clinic-yellow text-clinic-green shadow-xl", // Highlighted Yellow Card
//       size: "md:col-span-1 lg:col-span-1",
//     },
//     {
//       type: "text-card",
//       name: "Amit Desai",
//       treatment: "Dental Implant",
//       rating: 4,
//       text: "Seamless and painless experience. Highly recommend the dental wing for any surgeries.",
//       theme: "bg-white/5 border border-white/10 text-white backdrop-blur-md", // Glassy Dark Card
//       size: "md:col-span-1 lg:col-span-1",
//     },
//     {
//       type: "stat-card",
//       number: "1M+",
//       label: "Patients Healed",
//       theme: "bg-gradient-to-br from-[#f07c3a] to-[#c45e1e] text-white", // Orange Accent Card
//       size: "md:col-span-1 lg:col-span-1",
//     },
//     {
//       type: "text-card",
//       name: "Pooja Roy",
//       treatment: "Pediatric Care",
//       rating: 5,
//       text: "The doctors are so gentle. My daughter actually loves visiting her pediatrician now!",
//       theme: "bg-white/5 border border-white/10 text-white backdrop-blur-md",
//       size: "md:col-span-1 lg:col-span-1",
//     },
//     {
//       type: "video-card",
//       name: "Vikram Singh",
//       treatment: "Physical Therapy",
//       image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800",
//       text: "Regained full mobility in my shoulder. The guided sessions were perfect.",
//       // Wide Horizontal Video Box
//       size: "md:col-span-2 lg:col-span-2 min-h-[250px]", 
//     },
//     {
//       type: "text-card",
//       name: "Neha Gupta",
//       treatment: "General Checkup",
//       rating: 5,
//       text: "From booking to getting lab results, everything was completely digitized and seamless. Very impressed!",
//       theme: "bg-white/5 border border-white/10 text-white backdrop-blur-md",
//       // Wide Horizontal Text Box
//       size: "md:col-span-2 lg:col-span-2 min-h-[250px]", 
//     },
//   ];

//   return (
//     <div className="relative w-full py-28 px-6 bg-clinic-green overflow-hidden">
      
//       {/* Background Ambient Glows */}
//       <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-clinic-yellow opacity-10 blur-[150px] rounded-full pointer-events-none"></div>

//       <div className="relative z-10 max-w-7xl mx-auto">
        
//         {/* Header Section */}
//         <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
//           <div className="max-w-2xl">
//             <h2 className="text-5xl md:text-7xl font-black font-poppins text-white leading-tight tracking-tight">
//               Real Stories <br />
//               <span className="text-clinic-yellow relative inline-block">
//                 Real Healing
//                 <svg className="absolute w-full h-4 -bottom-1 left-0 text-white/20" viewBox="0 0 100 20" preserveAspectRatio="none">
//                   <path d="M0 15 Q 50 0 100 15" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
//                 </svg>
//               </span>
//             </h2>
//           </div>
//           <p className="text-white/70 text-lg font-inter max-w-md md:text-right">
//             Don't just take our word for it. Hear directly from the patients whose lives have been transformed by our care.
//           </p>
//         </div>

//         {/* =========================================
//             THE PACKED BENTO GRID
//             ========================================= */}
//         {/* Grid setup: 4 columns on Desktop, perfectly packed */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-fr">
          
//           {reviews.map((review, index) => {

//             // 1. VIDEO / IMAGE OVERLAY CARD (Like Sheryians placement videos)
//             if (review.type === "video-card") {
//               return (
//                 <div key={index} className={`relative rounded-[2rem] overflow-hidden group cursor-pointer ${review.size}`}>
//                   <img src={review.image} alt={review.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                  
//                   {/* Play Button Overly */}
//                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:bg-clinic-yellow group-hover:text-clinic-green transition-colors text-white z-10">
//                     <Play size={24} className="ml-1" fill="currentColor" />
//                   </div>
                  
//                   {/* Info */}
//                   <div className="absolute bottom-0 left-0 w-full p-8 z-10">
//                     <h3 className="text-white font-bold font-poppins text-2xl mb-1">{review.name}</h3>
//                     <p className="text-white/70 text-sm font-inter mb-4">{review.treatment}</p>
//                     <p className="text-white/90 text-sm font-medium italic border-l-2 border-clinic-yellow pl-3">"{review.text}"</p>
//                   </div>
//                 </div>
//               );
//             }

//             // 2. STAT / BADGE CARD (Fills empty space beautifully)
//             if (review.type === "stat-card") {
//               return (
//                 <div key={index} className={`relative rounded-[2rem] p-8 flex flex-col justify-center items-center text-center transition-transform hover:-translate-y-2 ${review.theme} ${review.size}`}>
//                   <h3 className="text-5xl lg:text-6xl font-black font-poppins mb-2">{review.number}</h3>
//                   <p className="text-sm uppercase tracking-widest font-bold opacity-90">{review.label}</p>
//                   <ArrowUpRight size={40} className="absolute top-6 right-6 opacity-20" />
//                 </div>
//               );
//             }

//             // 3. TEXT REVIEW CARD (Standard Testimonial)
//             return (
//               <div key={index} className={`relative rounded-[2rem] p-8 flex flex-col transition-all duration-300 hover:-translate-y-2 ${review.theme} ${review.size}`}>
//                 <Quote className="absolute top-6 right-6 w-12 h-12 opacity-10 rotate-180 pointer-events-none" />
                
//                 <div className="flex gap-1 mb-6 relative z-10">
//                   {[...Array(review.rating)].map((_, i) => (
//                     <Star key={i} size={16} className={review.theme.includes("bg-clinic-yellow") ? "fill-clinic-green text-clinic-green" : "fill-clinic-yellow text-clinic-yellow"} />
//                   ))}
//                 </div>
                
//                 <p className={`text-base leading-relaxed mb-8 font-inter flex-grow relative z-10 ${review.theme.includes("bg-clinic-yellow") ? 'font-medium' : 'font-light opacity-90'}`}>
//                   "{review.text}"
//                 </p>
                
//                 <div className="mt-auto relative z-10">
//                   <h4 className="font-bold font-poppins text-lg">{review.name}</h4>
//                   <p className={`text-xs font-inter uppercase tracking-wider mt-1 ${review.theme.includes("bg-clinic-yellow") ? 'text-clinic-green/70' : 'text-white/50'}`}>
//                     {review.treatment}
//                   </p>
//                 </div>
//               </div>
//             );
            
//           })}
//         </div>

//       </div>
//     </div>
//   );
// };

// export default ReviewPage;



// import React from "react";
// import { Star, Quote, BadgeCheck, HeartPulse, ShieldCheck } from "lucide-react";

// const ReviewPage = () => {
//   return (
//     <div className="relative w-full py-32 px-6 bg-clinic-green overflow-hidden font-inter">
      
//       {/* Background Ambient Glows */}
//       <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-clinic-yellow opacity-10 blur-[150px] rounded-full pointer-events-none"></div>

//       <div className="relative z-10 max-w-7xl mx-auto">
        
//         {/* Header Section */}
//         <div className="text-center max-w-3xl mx-auto mb-20">
//           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6">
//             <ShieldCheck size={18} className="text-clinic-yellow" />
//             <span className="text-xs font-bold text-white uppercase tracking-widest">
//               100% Verified Patients
//             </span>
//           </div>
//           <h2 className="text-5xl md:text-7xl font-black font-poppins text-white leading-tight tracking-tight">
//             Stories Of <br />
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-clinic-yellow to-white">True Healing</span>
//           </h2>
//         </div>

//         {/* =========================================
//             THE "NO-VIDEO" PERFECT BENTO GRID (4x3)
//             ========================================= */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[minmax(200px,auto)]">
          
//           {/* 1. THE GIANT EMOTIONAL ANCHOR (2x2) - Top Left */}
//           <div className="md:col-span-2 lg:col-span-2 lg:row-span-2 relative rounded-[2.5rem] p-10 bg-white/5 border border-white/10 backdrop-blur-xl flex flex-col justify-between group hover:-translate-y-2 transition-transform duration-500 overflow-hidden">
//             <Quote className="absolute -top-6 -left-6 w-40 h-40 text-white/5 rotate-180 transition-transform duration-700 group-hover:scale-110" />
            
//             <div className="relative z-10">
//               <div className="flex gap-1 mb-6">
//                 {[...Array(5)].map((_, i) => <Star key={i} size={20} className="fill-clinic-yellow text-clinic-yellow" />)}
//               </div>
//               <h3 className="text-3xl md:text-4xl font-bold text-white font-poppins leading-tight mb-6">
//                 "They didn't just treat my heart condition, they treated my fear. I felt like family from day one."
//               </h3>
//               <p className="text-white/60 text-lg leading-relaxed mb-8">
//                 The entire cardiology team works like magic. The way they explained the bypass procedure calmed all my anxieties. Waking up post-surgery, I knew I was in the safest hands possible.
//               </p>
//             </div>
            
//             <div className="relative z-10 mt-auto flex items-center gap-4 border-t border-white/10 pt-6">
//               <div className="w-12 h-12 rounded-full bg-clinic-yellow text-clinic-green flex items-center justify-center font-black text-xl">S</div>
//               <div>
//                 <h4 className="text-white font-bold font-poppins">Siddharth Menon</h4>
//                 <div className="flex items-center gap-1 text-clinic-yellow text-xs font-medium">
//                   <BadgeCheck size={14} /> Verified Patient
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* 2. THE TALL DOCTOR SHOUTOUT (1x2) - Center Right */}
//           <div className="md:col-span-1 lg:col-span-1 lg:row-span-2 relative rounded-[2.5rem] p-8 bg-clinic-yellow text-clinic-green flex flex-col group hover:-translate-y-2 transition-transform duration-500 shadow-[0_20px_40px_-15px_rgba(223,255,79,0.3)]">
//             <HeartPulse className="w-12 h-12 mb-6 text-clinic-green/50 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12" />
            
//             <p className="text-lg font-bold font-poppins mb-auto leading-snug">
//               "Dr. Ananya is a lifesaver. Literally. Her quick diagnosis saved me from a major stroke."
//             </p>
            
//             <div className="mt-12 bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
//               <h4 className="font-bold font-poppins text-sm">Pooja Sharma</h4>
//               <p className="text-clinic-green/70 text-xs font-medium uppercase tracking-widest mt-1">Neurology</p>
//             </div>
//           </div>

//           {/* 3. TRUST SCORE CARD (1x1) - Top Right */}
//           <div className="md:col-span-1 lg:col-span-1 lg:row-span-1 relative rounded-[2.5rem] p-8 bg-white/5 border border-white/10 backdrop-blur-md flex flex-col items-center justify-center text-center hover:bg-white/10 transition-colors duration-300">
//             <h3 className="text-6xl font-black font-poppins text-white mb-2">4.9</h3>
//             <div className="flex gap-1 mb-2">
//               {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-clinic-yellow text-clinic-yellow" />)}
//             </div>
//             <p className="text-white/50 text-xs font-bold uppercase tracking-widest">Based on 10k+ Reviews</p>
//           </div>

//           {/* 4. SHORT & PUNCHY (1x1) - Middle Right */}
//           <div className="md:col-span-1 lg:col-span-1 lg:row-span-1 relative rounded-[2.5rem] p-8 bg-white/5 border border-white/10 backdrop-blur-md flex flex-col hover:bg-white/10 transition-colors duration-300">
//             <p className="text-white/90 text-sm font-medium italic mb-auto">
//               "Zero wait time. I was in and out of the X-Ray department in 15 minutes."
//             </p>
//             <div className="mt-6">
//               <h4 className="text-white font-bold text-sm">Rahul V.</h4>
//               <p className="text-clinic-yellow/70 text-xs mt-1">Diagnostics</p>
//             </div>
//           </div>

//           {/* 5. THE WIDE TECH REVIEW (2x1) - Bottom Left */}
//           <div className="md:col-span-2 lg:col-span-2 lg:row-span-1 relative rounded-[2.5rem] p-8 bg-white/5 border border-white/10 backdrop-blur-md flex flex-col justify-center hover:bg-white/10 transition-colors duration-300">
//             <div className="flex items-center gap-6">
//               <div className="w-16 h-16 shrink-0 rounded-2xl bg-clinic-yellow/10 flex items-center justify-center text-clinic-yellow">
//                 <Quote size={28} />
//               </div>
//               <div>
//                 <p className="text-white text-lg font-medium mb-3">
//                   "The app made everything seamless. Got my lab results and prescriptions directly on my phone. Very futuristic!"
//                 </p>
//                 <p className="text-white/50 text-sm"><strong className="text-white">Amit Desai</strong> — Outpatient</p>
//               </div>
//             </div>
//           </div>

//           {/* 6. SMALL ACCENT CARD (1x1) - Bottom Center */}
//           <div className="md:col-span-1 lg:col-span-1 lg:row-span-1 relative rounded-[2.5rem] p-8 border border-clinic-yellow/30 bg-clinic-yellow/10 backdrop-blur-md flex flex-col hover:-translate-y-1 transition-transform duration-300">
//              <p className="text-white font-bold text-base mb-auto">
//               "Best pediatric care in the city. My kids love the play area!"
//             </p>
//             <div className="mt-6">
//               <h4 className="text-white font-bold text-sm">Neha K.</h4>
//             </div>
//           </div>

//           {/* 7. FINAL SHORT REVIEW (1x1) - Bottom Right */}
//           <div className="md:col-span-1 lg:col-span-1 lg:row-span-1 relative rounded-[2.5rem] p-8 bg-white/5 border border-white/10 backdrop-blur-md flex flex-col hover:bg-white/10 transition-colors duration-300">
//             <p className="text-white/90 text-sm font-medium italic mb-auto">
//               "The physiotherapy wing is equipped with top-notch machines. Recovered extremely fast."
//             </p>
//             <div className="mt-6">
//               <h4 className="text-white font-bold text-sm">Vikram S.</h4>
//               <p className="text-clinic-yellow/70 text-xs mt-1">Orthopedics</p>
//             </div>
//           </div>

//         </div>

//       </div>
//     </div>
//   );
// };

// export default ReviewPage;



import React from "react";
import { Star, Quote, BadgeCheck, HeartPulse, ShieldCheck, Stethoscope } from "lucide-react";

const ReviewPage = () => {
  return (
    <div className="relative w-full py-32 px-6 bg-clinic-green overflow-hidden font-inter">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-clinic-yellow opacity-10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6">
            <ShieldCheck size={18} className="text-clinic-yellow" />
            <span className="text-xs font-bold text-white uppercase tracking-widest">
              Real People. Real Care.
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black font-poppins text-white leading-tight tracking-tight">
            Stories Of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-clinic-yellow to-white">True Healing </span>
          </h2>
        </div>

        {/* =========================================
            THE ENHANCED BENTO GRID (4x3)
            ========================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[minmax(200px,auto)]">
          
          {/* 1. THE GIANT PATIENT REVIEW (2x2) - Top Left */}
          <div className="md:col-span-2 lg:col-span-2 lg:row-span-2 relative rounded-[2.5rem] p-10 bg-white/5 border border-white/10 backdrop-blur-xl flex flex-col justify-between group hover:-translate-y-2 transition-transform duration-500 overflow-hidden">
            <Quote className="absolute -top-6 -left-6 w-40 h-40 text-white/5 rotate-180 transition-transform duration-700 group-hover:scale-110" />
            
            <div className="relative z-10">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} size={20} className="fill-clinic-yellow text-clinic-yellow" />)}
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white font-poppins leading-tight mb-6">
                "They didn't just treat my heart condition, they treated my fear. I felt like family from day one."
              </h3>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                The entire cardiology team works like magic. The way they explained the bypass procedure calmed all my anxieties. Waking up post-surgery, I knew I was in the safest hands possible.
              </p>
            </div>
            
            {/* Patient Profile & Verified Badge */}
            <div className="relative z-10 mt-auto flex items-center gap-4 border-t border-white/10 pt-6">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150" alt="Patient" className="w-14 h-14 rounded-full object-cover border-2 border-white/20" />
              <div>
                <h4 className="text-white font-bold font-poppins">Siddharth Menon</h4>
                <div className="flex items-center gap-1.5 text-clinic-yellow text-xs font-medium mt-1">
                  <BadgeCheck size={14} /> Verified Patient
                </div>
              </div>
            </div>
          </div>

          {/* 2. THE TALL DOCTOR REVIEW (1x2) - Center Right */}
          <div className="md:col-span-1 lg:col-span-1 lg:row-span-2 relative rounded-[2.5rem] p-8 bg-clinic-yellow text-clinic-green flex flex-col group hover:-translate-y-2 transition-transform duration-500 shadow-[0_20px_40px_-15px_rgba(223,255,79,0.3)]">
            <HeartPulse className="w-12 h-12 mb-6 text-clinic-green/40 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12" />
            
            <p className="text-lg font-bold font-poppins mb-auto leading-snug">
              "As a surgeon, having access to these state-of-the-art robotic operation theaters allows me to deliver 100% precision."
            </p>
            
            {/* Doctor Profile & Icon */}
            <div className="mt-8 bg-white/20 p-4 rounded-2xl backdrop-blur-sm flex items-center gap-3">
              <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=150" alt="Doctor" className="w-12 h-12 rounded-full object-cover border border-clinic-green/30" />
              <div>
                <h4 className="font-bold font-poppins text-sm">Dr. Ananya S.</h4>
                <div className="flex items-center gap-1 text-clinic-green/80 text-[10px] font-bold uppercase tracking-widest mt-1">
                  <Stethoscope size={12} /> Chief Surgeon
                </div>
              </div>
            </div>
          </div>

          {/* 3. TRUST SCORE CARD (1x1) - Top Right */}
          <div className="md:col-span-1 lg:col-span-1 lg:row-span-1 relative rounded-[2.5rem] p-8 bg-white/5 border border-white/10 backdrop-blur-md flex flex-col items-center justify-center text-center hover:bg-white/10 transition-colors duration-300">
            <h3 className="text-6xl font-black font-poppins text-white mb-2">4.9</h3>
            <div className="flex gap-1 mb-2">
              {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-clinic-yellow text-clinic-yellow" />)}
            </div>
            <p className="text-white/50 text-xs font-bold uppercase tracking-widest">Based on 10k+ Reviews</p>
          </div>

          {/* 4. SHORT PATIENT REVIEW (1x1) - Middle Right */}
          <div className="md:col-span-1 lg:col-span-1 lg:row-span-1 relative rounded-[2.5rem] p-8 bg-white/5 border border-white/10 backdrop-blur-md flex flex-col hover:bg-white/10 transition-colors duration-300">
            <p className="text-white/90 text-sm font-medium italic mb-auto">
              "Zero wait time. I was in and out of the X-Ray department in 15 minutes."
            </p>
            {/* Patient Profile */}
            <div className="mt-6 flex items-center gap-3">
              <img src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=150" alt="Patient" className="w-10 h-10 rounded-full object-cover" />
              <div>
                <h4 className="text-white font-bold text-sm">Rahul V.</h4>
                <div className="flex items-center gap-1 text-clinic-yellow/80 text-[10px] font-medium">
                  <BadgeCheck size={12} /> Verified Patient
                </div>
              </div>
            </div>
          </div>

          {/* 5. THE WIDE PATIENT REVIEW (2x1) - Bottom Left */}
          <div className="md:col-span-2 lg:col-span-2 lg:row-span-1 relative rounded-[2.5rem] p-8 bg-white/5 border border-white/10 backdrop-blur-md flex flex-col justify-center hover:bg-white/10 transition-colors duration-300">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150" alt="Patient" className="w-16 h-16 shrink-0 rounded-2xl object-cover border border-white/20" />
              <div>
                <p className="text-white text-lg font-medium mb-3">
                  "The app made everything seamless. Got my lab results and prescriptions directly on my phone. Very futuristic!"
                </p>
                <div className="flex items-center gap-3">
                  <span className="text-white font-bold text-sm">Amit Desai</span>
                  <span className="flex items-center gap-1 text-clinic-yellow text-xs font-medium">
                    <BadgeCheck size={14} /> Verified Outpatient
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 6. SECOND DOCTOR REVIEW (1x1) - Bottom Center */}
          <div className="md:col-span-1 lg:col-span-1 lg:row-span-1 relative rounded-[2.5rem] p-8 border border-clinic-yellow/30 bg-clinic-yellow/5 backdrop-blur-md flex flex-col hover:-translate-y-1 transition-transform duration-300">
             <p className="text-white font-bold text-sm mb-auto">
              "The collaborative environment here ensures every patient gets multi-disciplinary care."
            </p>
            {/* Doctor Profile */}
            <div className="mt-6 flex items-center gap-3">
              <img src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=150" alt="Doctor" className="w-10 h-10 rounded-full object-cover border border-clinic-yellow/50" />
              <div>
                <h4 className="text-white font-bold text-sm">Dr. Vikram J.</h4>
                <div className="flex items-center gap-1 text-clinic-yellow/80 text-[10px] font-bold uppercase tracking-widest mt-0.5">
                   Orthopedics
                </div>
              </div>
            </div>
          </div>

          {/* 7. FINAL PATIENT REVIEW (1x1) - Bottom Right */}
          <div className="md:col-span-1 lg:col-span-1 lg:row-span-1 relative rounded-[2.5rem] p-8 bg-white/5 border border-white/10 backdrop-blur-md flex flex-col hover:bg-white/10 transition-colors duration-300">
            <p className="text-white/90 text-sm font-medium italic mb-auto">
              "The physiotherapy wing is equipped with top-notch machines. Recovered fast."
            </p>
            {/* Patient Profile */}
            <div className="mt-6 flex items-center gap-3">
              <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150" alt="Patient" className="w-10 h-10 rounded-full object-cover" />
              <div>
                <h4 className="text-white font-bold text-sm">Sneha K.</h4>
                <div className="flex items-center gap-1 text-clinic-yellow/80 text-[10px] font-medium mt-0.5">
                  <BadgeCheck size={12} /> Verified
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ReviewPage;
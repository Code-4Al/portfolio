'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="flex flex-col items-center justify-center py-12 md:py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in-up flex flex-col items-center">
          {/* Profile Image with Thick Animated Liquid Border */}
          <div className="relative w-34 h-34 md:w-42 md:h-42 mb-6 mt-15">
            {/* Animated glowing border */}
            <div className="absolute inset-0 rounded-full p-[6px] bg-green-600 animate-spin-slow">
              <div className="absolute inset-[4px] rounded-full bg-black"></div>
            </div>

            {/* Profile image inside */}
            <div className="absolute inset-[10px] rounded-full overflow-hidden shadow-lg">
              <Image
                src="/photo.jpg" // 👈 replace with your image path
                alt="Profile photo"
                fill
                className="object-cover rounded-full"
              />
            </div>
          </div>

          {/* Text Section */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-3 text-balance mt-4">
            Building Digital
            <span className="text-primary block">Experiences</span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Passionate about creating innovative web solutions that combine
            beautiful design with powerful functionality.
          </p>
        </div>
      </div>
    </section>
  )
}
















// 'use client'

// import { useEffect, useState } from 'react'
// import Image from 'next/image'

// export function HeroSection() {
//   const [mounted, setMounted] = useState(false)

//   useEffect(() => {
//     setMounted(true)
//   }, [])

//   if (!mounted) return null

//   return (
//     <section className="flex flex-col items-center justify-center py-12 md:py-16 relative overflow-hidden">
//       <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
//       <div className="container mx-auto px-4 text-center relative z-10">
//         <div className="animate-fade-in-up flex flex-col items-center">
//           {/* Profile Image */}
//           <div className="relative w-40 h-40 md:w-48 md:h-48 mb-6 mt-15">
//             <Image
//               src="/photo.jpg" // 👈 replace this with your actual image path (e.g., /profile.png)
//               alt="Profile photo"
//               fill
//               className="rounded-full object-cover shadow-lg ring-4 ring-primary/30 hover:ring-primary/50 transition-all duration-300"
//             />
//           </div>

//           {/* Title & Subtitle */}
//           <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-3 text-balance mt-6">
//             Building Digital
//             <span className="text-primary block">Experiences</span>
//           </h2>

//           <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
//             Passionate about creating innovative web solutions that combine
//             beautiful design with powerful functionality.
//           </p>
//         </div>
//       </div>
//     </section>
//   )
// }

// 'use client'

// import { useEffect, useState } from 'react'

// export function HeroSection() {
//   const [mounted, setMounted] = useState(false)

//   useEffect(() => {
//     setMounted(true)
//   }, [])

//   if (!mounted) return null

//   return (
//     <section className="flex flex-col items-center justify-center py-12 md:py-16 relative overflow-hidden">
//       <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
//       <div className="container mx-auto px-4 text-center relative z-10">
//         <div className="animate-fade-in-up">
//           <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-3 text-balance mt-20">
//             Building Digital
//             <span className="text-primary block">Experiences</span>
//           </h2>
//           <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
//             Passionate about creating innovative web solutions that combine
//             beautiful design with powerful functionality.
//           </p>
//         </div>
//       </div>
//     </section>
//   )
// }

// "use client"

// import { useEffect, useState } from "react"

// export function HeroSection() {
//   const [mounted, setMounted] = useState(false)

//   useEffect(() => {
//     setMounted(true)
//   }, [])

//   if (!mounted) return null

//   return (
//     //<section className="min-h-screen flex items-center justify-center relative overflow-hidden">
//     <section className="min-h-screen flex flex-col justify-start pt-32 pb-16 relative overflow-hidden">
//       <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
//       <div className="container mx-auto px-4 text-center relative z-10">
//         <div className="animate-fade-in-up">
//           <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
//             Building Digital
//             <span className="text-primary block">Experiences</span>
//           </h2>
//           <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
//             Passionate about creating innovative web solutions that combine
//             beautiful design with powerful functionality.
//           </p>
//         </div>
//       </div>
//     </section>
//   )
// }

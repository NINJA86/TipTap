import localFont from 'next/font/local'

const outfitFont = localFont({
     src: [
        {
            path: '../public/font/Outfit-VariableFont_wght.ttf',
            style: 'normal',
            weight: '100 900'
        }

     ],
     variable: '--font-outfit',
     display: 'swap'
})

export { outfitFont }
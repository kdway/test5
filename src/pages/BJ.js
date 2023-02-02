import React from 'react'
import '../Style/BJ.css'
function BJ() {
    return (
        <>
    <h3 className='title ms-5 mt-5'>HTML (HyperText Markup Language)</h3> 
    <p className='desc mt-5 me-5'>
    HTML signifie « HyperText Markup Language » qu'on peut traduire par « langage de balises pour l'hypertexte ». Il est utilisé afin de créer et de représenter le contenu d'une page web et sa structure. D'autres technologies sont utilisées avec HTML pour décrire la présentation d'une page (CSS) et/ou ses fonctionnalités interactives (JavaScript).

L'« hypertexte » désigne les liens qui relient les pages web entre elles, que ce soit au sein d'un même site web ou entre différents sites web. Les liens sont un aspect fondamental du Web. Ce sont eux qui forment cette « toile » (ce mot est traduit par web en anglais). En téléchargeant du contenu sur l'Internet et en le reliant à des pages créées par d'autres personnes, vous devenez un participant actif du World Wide Web.
    </p>
     
    <h3 className='title ms-5'>Les balises HTML</h3> 
    <p className='des mt-5'>
    HyperText Markup Language (HTML) est le code utilisé pour structurer une page web et son contenu. Par exemple, le contenu de votre page pourra être structuré en un ensemble de paragraphes, une liste à puces ou avec des images et des tableaux de données. Comme le suggère le titre, cet article vous fournit les bases de compréhension du HTML et de ses fonctions.
    </p>

    <div className='anatomie mt-5 ms-5'>
        <h3>Anatomie d'Elément HTML</h3>
    <img src='https://developer.mozilla.org/fr/docs/Learn/Getting_started_with_the_web/HTML_basics/chat-grincheuxl.png'></img>

    </div>

    <h2>Pour mieux comprendre l'HTML n'ésitez pas de Visiter le site MDN WEB DOCS</h2>
    <a href='https://developer.mozilla.org/fr/'><button>Cliquez ici</button></a>
   
        </>
      
    )
}

export default BJ

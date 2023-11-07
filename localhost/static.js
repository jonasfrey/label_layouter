import {f_o_html_from_o_js} from "https://deno.land/x/f_o_html_from_o_js@0.7/mod.js";
import {
    f_add_css,
    f_s_css_prefixed
} from "https://deno.land/x/f_add_css@0.6/mod.js"

let o_data = {
    "a_o": [
        {
            "Title": "Prof. Dr.",
            "Last Name": "Alibert",
            "Firstname": "Yann",
            "Full Name": "Yann Alibert",
            "Function I": "Co-Director Center for Space",
            "Function II": "and Habitability (CSH)",
            "Function III": ""
        },
        {
            "Title": "Prof. Dr.",
            "Last Name": "Wampfler",
            "Firstname": "Susanne",
            "Full Name": "Susanne Wampfler",
            "Function I": "Co-Director Center for Space",
            "Function II": "and Habitability (CSH)",
            "Function III": ""
        },
        {
            "Title": "",
            "Last Name": "Gargano",
            "Firstname": "Michela",
            "Full Name": "Michela Gargano",
            "Function I": "Project Manager IMAP (NASA),",
            "Function II": "Engineer Comet Interceptor (ESA)",
            "Function III": ""
        },
        {
            "Title": "",
            "Last Name": "Hängi",
            "Firstname": "Raphaël",
            "Full Name": "Raphaël Hängi",
            "Function I": "",
            "Function II": "",
            "Function III": ""
        },
        {
            "Title": "",
            "Last Name": "Roger",
            "Firstname": "Thibaut",
            "Full Name": "Thibaut Roger",
            "Function I": "Communication and Outreach,",
            "Function II": "NCCR PlanetS",
            "Function III": ""
        },
        {
            "Title": "",
            "Last Name": "Schwarz",
            "Firstname": "Guido",
            "Full Name": "Guido Schwarz",
            "Function I": "Communication and Outreach,",
            "Function II": "NCCR PlanetS",
            "Function III": ""
        },
        {
            "Title": "Prof. Dr.",
            "Last Name": "Mordasini",
            "Firstname": "Christoph",
            "Full Name": "Christoph Mordasini",
            "Function I": "Head of Division ",
            "Function II": "Space Research and Planetary Sciences (WP)",
            "Function III": ""
        },
        {
            "Title": "Prof. Dr.",
            "Last Name": "Demory",
            "Firstname": "Brice",
            "Full Name": "Brice Demory",
            "Function I": "Professor & ERC Grantee",
            "Function II": "Center for Space and Habitability",
            "Function III": ""
        },
        {
            "Title": "",
            "Last Name": "Krummenacher",
            "Firstname": "Sophie",
            "Full Name": "Sophie Krummenacher",
            "Function I": "Communication and Outreach",
            "Function II": "Center for Space and Habitability",
            "Function III": ""
        },
        {
            "Title": "",
            "Last Name": "",
            "Firstname": "",
            "Full Name": " ",
            "Function I": "",
            "Function II": "",
            "Function III": ""
        }, 
        {
            "Title": "Prof. Dr.",
            "Last Name": "Thomas",
            "Firstname": "Nicolas",
            "Full Name": "Nicolas Thomas",
            "Function I": "",
            "Function II": "",
            "Function III": ""
        },
        {
            "Title": "Prof. Dr.",
            "Last Name": "Thomas",
            "Firstname": "Nicolas",
            "Full Name": "Nicolas Thomas",
            "Function I": "Director NCCR PlanetS",
            "Function II": "",
            "Function III": ""
        },
        {
            "Title": "",
            "Last Name": "Keresztes Schmidt",
            "Firstname": "Peter",
            "Full Name": "Peter Keresztes Schmidt",
            "Function I": "PhD Candidate",
            "Function II": "",
            "Function III": ""
        },
        {
            "Title": "",
            "Last Name": "Boeren",
            "Firstname": "Nikita",
            "Full Name": "Nikita Boeren",
            "Function I": "PhD Candidate",
            "Function II": "",
            "Function III": ""
        },
        {
            "Title": "Dr.",
            "Last Name": "Fortier",
            "Firstname": "Andrea",
            "Full Name": "Andrea Fortier",
            "Function I": "Instrument Scientist, CHEOPS",
            "Function II": "",
            "Function III": ""
        },
        {
            "Title": "",
            "Last Name": "Kipfer",
            "Firstname": "Kristina",
            "Full Name": "Kristina Kipfer",
            "Function I": "PhD Candidate",
            "Function II": "",
            "Function III": ""
        },
        {
            "Title": "",
            "Last Name": "Lerch",
            "Firstname": "Nik",
            "Full Name": "Nik Lerch",
            "Function I": "Polymechaniklernende",
            "Function II": "",
            "Function III": ""
        },
        {
            "Title": "",
            "Last Name": "Weber",
            "Firstname": "Julian",
            "Full Name": "Julian Weber",
            "Function I": "Polymechaniklernende",
            "Function II": "",
            "Function III": ""
        },
        {
            "Title": "Dr.",
            "Last Name": "Riesen",
            "Firstname": "Timm",
            "Full Name": "Timm Riesen",
            "Function I": "Direktor Stellarium Gornergrat",
            "Function II": "",
            "Function III": ""
        },
        {
            "Title": "Prof. Dr.",
            "Last Name": "Richter",
            "Firstname": "Virginia",
            "Full Name": "Virginia Richter",
            "Function I": "Vice Rector for Development ",
            "Function II": "",
            "Function III": ""
        },
        {
            "Title": "Prof. Dr.",
            "Last Name": "Wurz",
            "Firstname": "Peter",
            "Full Name": "Peter Wurz",
            "Function I": "Director Physics Institute",
            "Function II": "",
            "Function III": ""
        },
        {
            "Title": "",
            "Last Name": "Bucher",
            "Firstname": "Brigit",
            "Full Name": "Brigit Bucher",
            "Function I": "Director Media Relations",
            "Function II": "",
            "Function III": ""
        },
        {
            "Title": "Dr.",
            "Last Name": "Murk",
            "Firstname": "Axel",
            "Full Name": "Axel Murk",
            "Function I": "Head of THz-optics",
            "Function II": "",
            "Function III": ""
        },
        {
            "Title": "",
            "Last Name": "Stöckli",
            "Firstname": "Linus",
            "Full Name": "Linus Stöckli",
            "Function I": "",
            "Function II": "",
            "Function III": ""
        },
        {
            "Title": "PD Dr.",
            "Last Name": "Pommerol",
            "Firstname": "Antoine",
            "Full Name": "Antoine Pommerol",
            "Function I": "",
            "Function II": "",
            "Function III": ""
        },
        {
            "Title": "",
            "Last Name": "",
            "Firstname": "",
            "Full Name": " ",
            "Function I": "",
            "Function II": "",
            "Function III": ""
        }
    ]
}
console.log(o_data.a_o.length)
let o_js__everything = {
    f_o_js: function(){
        return {
            class: "app a_o",
            a_o:[
                ...o_data.a_o.filter(o=>o["Function II"].trim()!='' || o["Function III"].trim()!='').map(
                    (o)=>{
                        return {
                            class: "label", 
                            a_o: [
                                {
                                    s_tag: "img", 
                                    src: "./logo_unibern_squid3.png"
                                },
                                {
                                    class: "text",
                                    a_o:[
                                        {
                                            
                                            class: "Title",
                                            innerText: o['Title']
                                        },
                                        {
                                            
                                            class: "Full Name",
                                            innerText: o['Full Name']
                                        },
                                        {
                                            
                                            class: "Function I",
                                            innerText: o['Function I']
                                        },
                                        {
                                            
                                            class: "Function II",
                                            innerText: o['Function II']
                                        },
                                        {
                                            
                                            class: "Function III",
                                            innerText: o['Function III']
                                        }
                                    ]
                                } 
                            ]
                        }
                    }
                ),

            ]
        }
    }
}
let o = {
    a_o:[
        o_js__everything
    ]
}

var o_html = f_o_html_from_o_js(o);
document.body.className = 'theme_dark'
document.body.appendChild(o_html)

f_add_css(
    ['@media print', '@media screen'].map(
        (s)=>{
            return `${s}{
                *{
                    font-family: sans;
                }
                .a_o{
                    display:flex;
                    flex-wrap:wrap;
                    flex-direction: row;
                }
                .label{
                    width: 90mm;
                    height: 55mm;
                    border:1px solid rgba(0,0,0,1);
                    position:relative;
                    page-break-inside: avoid; /* This will avoid breaking content across pages */
                    break-inside: avoid; /* CSS level 3 equivalent of page-break-inside */
                    /* Other styling goes here */
                }
                img{
                    width: 35%;
                    position: absolute;
                    top: 0;
                    right: 0;
                }
                .text {
                    position: absolute;
                    bottom: 0;
                    height: auto;
                    padding: 0.7rem;
                }
                
                .Title {
                    font-size: 1.4rem;
                }
                
                .Full.Name {
                    font-size: 2rem;
                }

            }`
        }
    ).join('\n')

    
)

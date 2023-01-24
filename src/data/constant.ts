const questions = [
     {
        "question": "1.- Para mí es importante recibir la aprobación de los demás.",
        "interpretation": 'Search',
        "id" : "dataInterSearch1",
        "valueA": 1,
        "valueB" : 0
    },
    {
        "question": "2.- Odio equivocarme en algo.",
        "interpretation": "BUSQUEDA DE APROBACIÓN Y RECONOCIMIENTO",
        "id" : "dataInterSearch2",
        "valueA": 1,
        "valueB" : 0
    },
    {
        "question": "La gente que se equivoca, logra lo que se merece.",
        "interpretation": "BUSQUEDA DE APROBACIÓN Y RECONOCIMIENTO",
        "id" : "dataInterSearch3",
        "valueA": 1,
        "valueB" : 0
    },
    {
        "question": "Generalmente acepto los acontecimientos con filosofía.",
        "interpretation": "BUSQUEDA DE APROBACIÓN Y RECONOCIMIENTO",
         "id" : "dataInterSearch4",
        "valueA": 0,
        "valueB" : 1
    },
    {
        "question": "Si una persona quiere, puede ser feliz en casi cualquier circunstancia.",
        "interpretation": "BUSQUEDA DE APROBACIÓN Y RECONOCIMIENTO",
        "id" : "dataInterSearch5",
        "valueA": 0,
        "valueB" : 1
    },
    {
        "question": "Temo a las cosas que, a menudo, me resultan objeto de preocupación.",
        "interpretation": "BUSQUEDA DE APROBACIÓN Y RECONOCIMIENTO",
       "id" : "dataInterSearch5",
        "valueA": 0,
        "valueB" : 1
    },
    {
        "question": "Normalmente aplazo las decisiones importantes.",
        "interpretation": "BUSQUEDA DE APROBACIÓN Y RECONOCIMIENTO",
       "id" : "dataInterSearch5",
        "valueA": 0,
        "valueB" : 1
    },
    {
        "question": "Todo el mundo necesita de alguien a quién recurrir en busca de ayuda y consejo.",
        "interpretation": "BUSQUEDA DE APROBACIÓN Y RECONOCIMIENTO",
        "id" : "dataInterSearch5",
        "valueA": 0,
        "valueB" : 1
    },
    {
        "question": "“Una cebra no puede cambiar sus rayas”.",
        "interpretation": "BUSQUEDA DE APROBACIÓN Y RECONOCIMIENTO",
        "id" : "dataInterSearch5",
        "valueA": 0,
        "valueB" : 1
    },
    {
        "question": "Prefiero sobre todas las cosas pasar el tiempo libre de una forma tranquila.",
        "interpretation": "BUSQUEDA DE APROBACIÓN Y RECONOCIMIENTO",
       "id" : "dataInterSearch5",
        "valueA": 0,
        "valueB" : 1
    },
    {
        "question": "Me gusta que los demás me respeten, pero yo no tengo porque respetar a nadie.",
        "interpretation": {"PERFECCIONISTA":"Debe ser indefectiblemente competente y casi perfecto en todo lo que emprende."},
        "id" : "dataInterSearch6",
        "valueA": 0,
        "valueB" : 1
    },
    {
        "question": "Evito las cosas que no puedo hacer bien.",
        "interpretation": "PERFECCIONISTA",
       "id" : "dataInterSearch5",
        "valueA": 0,
        "valueB" : 1
    },
    {
        "question": "Hay demasiadas personas malas que escapan del castigo del infierno.",
        "interpretation": "PERFECCIONISTA",
       "id" : "dataInterSearch5",
        "valueA": 0,
        "valueB" : 1
    },
    {
        "question": "Las frustraciones no me distorsionan.",
        "interpretation": "PERFECCIONISTA",
         "id" : "dataInterSearch7",
        "valueA": 0,
        "valueB" : 1
    },
    {
        "question": "A la gente no le trastornan los acontecimientos sino la imagen que tiene de ellos.",
        "interpretation": "PERFECCIONISTA",
         "id" : "dataInterSearch1",
        "valueA": 0,
        "valueB" : 1
    },
    {
        "question": "Me producen poca ansiedad los peligros inesperados o los acontecimientos futuros.",
        "interpretation": "PERFECCIONISTA",
         "id" : "dataInterSearch1",
        "valueA": 0,
        "valueB" : 1
    },
    {
        "question": "Trato de afrontar los trabajos fastidiosos y hacerlos cuanto antes.",
        "interpretation": "PERFECCIONISTA",
         "id" : "dataInterSearch1",
        "valueA": 0,
        "valueB" : 1
    },
    {
        "question": "En las decisiones importantes, consulto con una autoridad al respecto.",
        "interpretation": "PERFECCIONISTA",
       "id" : "dataInterSearch5",
        "valueA": 0,
        "valueB" : 1
    },
    {
        "question": "Es casi imposible superar la influencia del pasado.",
        "interpretation": "PERFECCIONISTA",
       "id" : "dataInterSearch5",
        "valueA": 0,
        "valueB" : 1
    },
    {
        "question": "Me gusta disponer de muchos recursos.",
        "interpretation": "PERFECCIONISTA",
         "id" : "dataInterSearch1",
        "valueA": 0,
        "valueB" : 1
    },
    {
        "question": "Quiero gustar a todo el mundo.",
        "interpretation": {"CONDENACIÓN":"Ciertas personas son malas, viles y perversas y deberían ser castigadas. "},
       "id" : "dataInterSearch5",
        "valueA": 0,
        "valueB" : 1
    },
    {
        "question": "No me gusta competir en actividades en las que los demás son mejores que yo.",
        "interpretation": "CONDENACIÓN",
         "id" : "dataInterSearch1",
        "valueA": 0,
        "valueB" : 1
    },
    {
        "question": "Aquellos que se equivocan merecen cargar con la culpa.",
        "interpretation": "CONDENACIÓN",
       "id" : "dataInterSearch5",
        "valueA": 0,
        "valueB" : 1
    },
    {
        "question": "Las cosas deberían ser distintas a como son.",
        "interpretation": "CONDENACIÓN",
       "id" : "dataInterSearch5",
        "valueA": 0,
        "valueB" : 1
    },
    {
        "question": "Yo provoco mi propio mal humor.",
        "interpretation": "CONDENACIÓN",
         "id" : "dataInterSearch1",
        "valueA": 0,
        "valueB" : 1
    },
    {
        "question": "A menudo, no puedo quitarme algún asunto de la cabeza.",
        "interpretation": "CONDENACIÓN",
       "id" : "dataInterSearch5",
        "valueA": 0,
        "valueB" : 1
    },
    {
        "question": "Evito enfrentarme a los problemas.",
        "interpretation": "CONDENACIÓN",
       "id" : "dataInterSearch5",
        "valueA": 0,
        "valueB" : 1
    },
    {
        "question": "Todo el mundo necesita tener fuera de si mismo una fuente de energía.",
        "interpretation": "CONDENACIÓN",
       "id" : "dataInterSearch5",
        "valueA": 0,
        "valueB" : 1
    },
    {
        "question": "Solo porque una vez algo afecto tu vida de forma importante, no quiere decir que tenga que ser igual en el futuro.",
        "interpretation": "CONDENACIÓN",
         "id" : "dataInterSearch1",
        "valueA": 0,
        "valueB" : 1
    },
    {
        "question": "Me siento mas satisfecho cuando tengo muchas cosas que hacer.",
        "interpretation": "CONDENACIÓN",
         "id" : "dataInterSearch1",
        "valueA": 0,
        "valueB" : 1
    },
    {
        "question": "Puedo gustarme a mi mismo aun cuando no guste a los demás.",
        "interpretation": {"BTF": "Lo que mas me divierte es realizar algún proyecto creativo."},
         "id" : "dataInterSearch1",
        "valueA": 0,
        "valueB" : 1
    },
    {
        "question": "Me gustaría triunfar en algo, pero no pienso que deba hacerlo.",
        "interpretation": "BTF",
         "id" : "dataInterSearch1",
        "valueA": 0,
        "valueB" : 1
    },
    {
        "question": "La inmoralidad debería castigarse severamente.",
        "interpretation": "BTF",
       "id" : "dataInterSearch5",
        "valueA": 0,
        "valueB" : 1
    },
    {
        "question": "A menudo me siento trastornado por situaciones que no me gustan.",
        "interpretation": "BTF",
       "id" : "dataInterSearch5",
        "valueA": 0,
        "valueB" : 1
    },
    {
        "question": "Las personas desgraciadas, normalmente, se deben este estado a si mismas.",
        "interpretation": "BTF",
         "id" : "dataInterSearch1",
        "valueA": 0,
        "valueB" : 1
    },
    {
        "question": "No me preocupo por no poder evitar que algo ocurra.",
        "interpretation": "BTF",
        "id" : "dataInterSearch1",
        "valueA": 0,
        "valueB" : 1
    },
    {
        "question": "Normalmente tomo las decisiones tan pronto como puedo.",
        "interpretation": "BTF",
        "id" : "dataInterSearch1",
        "valueA": 0,
        "valueB" : 1
    },
    {
        "question": "ay determinadas personas de las que dependo mucho.",
        "interpretation": {"BTF": "Lo que mas me divierte es realizar algún proyecto creativo."},
        "id" : "dataInterSearch5",
        "valueA": 0,
        "valueB" : 1
    },
    {
        "question": "La gente sobrevalora la influencia del pasado.",
        "interpretation": "BTF",
        "id" : "dataInterSearch1",
        "valueA": 0,
        "valueB" : 1
    },
    {
        "question": "Lo que mas me divierte es realizar algún proyecto creativo.",
        "interpretation": "BTF",
         "id" : "dataInterSearch1",
        "valueA": 0,
        "valueB" : 1
    },
    {
        "question": "Lo que mas me divierte es realizar algún proyecto creativo.",
        "interpretation": "BTF",
        "id" : "dataInterSearch1",
        "valueA": 0,
        "valueB" : 1
    }
]

export default questions
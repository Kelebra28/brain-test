const questions = [
     {
        'question': '1.- Para mí es importante recibir la aprobación de los demás.',
        'interpretation': 'Search',
        'id': 'dataInterSearch1',
        'valueA': 1,
        'valueB': 0
    },
    {
        'question': '2.- Odio equivocarme en algo.',
        'interpretation': 'Perfection',
        'id': 'dataInterPerfection1',
        'valueA': 1,
        'valueB': 0
    },
    {
        'question': '3.- La gente que se equivoca, logra lo que se merece.',
        'interpretation': 'Condemnation',
        'id': 'dataInterCondemnation1',
        'valueA': 1,
        'valueB': 0
    },
    {
        'question': '4.- Generalmente acepto los acontecimientos con filosofía.',
        'interpretation': 'BTF',
        'id': 'dataInterBTF1',
        'valueA': 0,
        'valueB': 1
    },
    {
        'question': '5.- Si una persona quiere, puede ser feliz en casi cualquier circunstancia.',
        'interpretation': 'Victimization',
        'id': 'dataInterVictimization1',
        'valueA': 0,
        'valueB': 1
    },
    {
        'question': '6.- Temo a las cosas que, a menudo, me resultan objeto de preocupación.',
        'interpretation': 'Anxious',
        'id': 'dataInterAnxious1',
        'valueA': 1,
        'valueB': 0
    },
    {
        'question': '7.- Normalmente aplazo las decisiones importantes.',
        'interpretation': 'Avoidant',
        'id': 'dataInterAvoidant1',
        'valueA': 1,
        'valueB': 0
    },
    {
        'question': '8.- Todo el mundo necesita de alguien a quién recurrir en busca de ayuda y consejo.',
        'interpretation': 'Insecure',
        'id': 'dataInterInsecure1',
        'valueA': 1,
        'valueB': 0
    },
    {
        'question': '9.-"Una cebra no puede cambiar sus rayas”.',
        'interpretation': 'Past',
        'id': 'dataInterPast1',
        'valueA': 1,
        'valueB': 0
    },
    {
        'question': '10.- Prefiero sobre todas las cosas pasar el tiempo libre de una forma tranquila.',
        'interpretation': 'Procrastination',
        'id': 'dataInterProcrastination1',
        'valueA': 1,
        'valueB': 0
    },
    {
        'question': '11.- Me gusta que los demás me respeten, pero yo no tengo porque respetar a nadie.',
        'interpretation': 'Perfection',
        'id': 'dataInterSearch2',
        'valueA': 0,
        'valueB': 1
    },
    {
        'question': '12.- Evito las cosas que no puedo hacer bien.',
        'interpretation': 'Perfection',
        'id': 'dataInterPerfection2',
        'valueA': 1,
        'valueB': 0
    },
    {
        'question': '13.- Hay demasiadas personas malas que escapan del castigo del infierno.',
        'interpretation': 'Perfection',
        'id': 'dataInterCondemnation2',
        'valueA': 1,
        'valueB': 0
    },
    {
        'question': '14.- Las frustraciones no me distorsionan.',
        'interpretation': 'Perfection',
        'id': 'dataInterBTF2',
        'valueA': 0,
        'valueB': 1
    },
    {
        'question': '15.- A la gente no le trastornan los acontecimientos sino la imagen que tiene de ellos.',
        'interpretation': 'Perfection',
        'id': 'dataInterVictimization2',
        'valueA': 0,
        'valueB': 1
    },
    {
        'question': '16.- Me producen poca ansiedad los peligros inesperados o los acontecimientos futuros.',
        'interpretation': 'Perfection',
        'id': 'dataInterAnxious2',
        'valueA': 0,
        'valueB': 1
    },
    {
        'question': '17.- Trato de afrontar los trabajos fastidiosos y hacerlos cuanto antes.',
        'interpretation': 'Perfection',
        'id': 'dataInterAvoidant2',
        'valueA': 0,
        'valueB': 1
    },
    {
        'question': '18.- En las decisiones importantes, consulto con una autoridad al respecto.',
        'interpretation': 'Perfection',
        'id': 'dataInterInsecure2',
        'valueA': 1,
        'valueB': 0
    },
    {
        'question': '19.- Es casi imposible superar la influencia del pasado.',
        'interpretation': 'Perfection',
        'id': 'dataInterPast2',
        'valueA': 1,
        'valueB': 0
    },
    {
        'question': '20.- Me gusta disponer de muchos recursos.',
        'interpretation': 'Perfection',
        'id': 'dataInterProcrastination2',
        'valueA': 0,
        'valueB': 1
    },
    {
        'question': '21.- Quiero gustar a todo el mundo.',
        'interpretation': 'Condemnation',
        'id': 'dataInterSearch3',
        'valueA': 1,
        'valueB': 0
    },
    {
        'question': '22.- No me gusta competir en actividades en las que los demás son mejores que yo.',
        'interpretation': 'Condemnation',
        'id': 'dataInterPerfection3',
        'valueA': 0,
        'valueB': 1
    },
    {
        'question': '23.- Aquellos que se equivocan merecen cargar con la culpa.',
        'interpretation': 'Condemnation',
        'id': 'dataInterCondemnation3',
        'valueA': 1,
        'valueB': 0
    },
    {
        'question': '24.- Las cosas deberían ser distintas a como son.',
        'interpretation': 'Condemnation',
        'id': 'dataInterBTF3',
        'valueA': 1,
        'valueB': 0
    },
    {
        'question': '25.- Yo provoco mi propio mal humor.',
        'interpretation': 'Condemnation',
        'id': 'dataInterVictimization3',
        'valueA': 0,
        'valueB': 1
    },
    {
        'question': '26.- A menudo, no puedo quitarme algún asunto de la cabeza.',
        'interpretation': 'Condemnation',
        'id': 'dataInterAnxious3',
        'valueA': 1,
        'valueB': 0
    },
    {
        'question': '27.- Evito enfrentarme a los problemas.',
        'interpretation': 'Condemnation',
        'id': 'dataInterAvoidant3',
        'valueA': 1,
        'valueB': 0
    },
    {
        'question': '28.- Todo el mundo necesita tener fuera de si mismo una fuente de energía.',
        'interpretation': 'Condemnation',
        'id': 'dataInterInsecure3',
        'valueA': 1,
        'valueB': 0
    },
    {
        'question': '29.- Solo porque una vez algo afecto tu vida de forma importante, no quiere decir que tenga que ser igual en el futuro.',
        'interpretation': 'Condemnation',
        'id': 'dataInterPast3',
        'valueA': 0,
        'valueB': 1
    },
    {
        'question': '30.- Me siento mas satisfecho cuando tengo muchas cosas que hacer.',
        'interpretation': 'Condemnation',
        'id': 'dataInterProcrastination3',
        'valueA': 0,
        'valueB': 1
    },
    {
        'question': '31.- Puedo gustarme a mi mismo aun cuando no guste a los demás.',
        'interpretation': 'BTF',
        'id': 'dataInterSearch4',
        'valueA': 0,
        'valueB': 1
    },
    {
        'question': '32.- Me gustaría triunfar en algo, pero no pienso que deba hacerlo.',
        'interpretation': 'BTF',
        'id': 'dataInterPerfection4',
        'valueA': 0,
        'valueB': 1
    },
    {
        'question': '33.- La inmoralidad debería castigarse severamente.',
        'interpretation': 'BTF',
        'id': 'dataInterCondemnation4',
        'valueA': 1,
        'valueB': 0
    },
    {
        'question': '34.- A menudo me siento trastornado por situaciones que no me gustan.',
        'interpretation': 'BTF',
        'id': 'dataInterBTF4',
        'valueA': 1,
        'valueB': 0
    },
    {
        'question': '35.- Las personas desgraciadas, normalmente, se deben este estado a si mismas.',
        'interpretation': 'BTF',
        'id': 'dataInterVictimization4',
        'valueA': 0,
        'valueB': 1
    },
    {
        'question': '36.- No me preocupo por no poder evitar que algo ocurra.',
        'interpretation': 'BTF',
        'id': 'dataInterAnxious4',
        'valueA': 0,
        'valueB': 1
    },
    {
        'question': '37.- Normalmente tomo las decisiones tan pronto como puedo.',
        'interpretation': 'BTF',
        'id': 'dataInterAvoidant4',
        'valueA': 0,
        'valueB': 1
    },
    {
        'question': '38.- Hay determinadas personas de las que dependo mucho.',
        'interpretation': 'BTF',
        'id': 'dataInterInsecure4',
        'valueA': 1,
        'valueB': 0
    },
    {
        'question': '39.- La gente sobrevalora la influencia del pasado.',
        'interpretation': 'BTF',
        'id': 'dataInterPast4',
        'valueA': 0,
        'valueB': 1
    },
    {
        'question': '40.- Lo que mas me divierte es realizar algún proyecto creativo.',
        'interpretation': 'BTF',
        'id': 'dataInterProcrastination4',
        'valueA': 0,
        'valueB': 1
    },
    {
        'question': '41.- Si no gusto a los demás es su problema, no el mío.',
        'interpretation': 'Victimization',
        'id': 'dataInterSearch5',
        'valueA': 0,
        'valueB': 1
    },
    {
        'question': '42.- Para mi es muy importante alcanzar el éxito en todo lo que hago.',
        'interpretation': 'Victimization',
        'id': 'dataInterPerfection5',
        'valueA': 1,
        'valueB': 0
    },
    {
        'question': '43.- Yo pocas veces culpo a la gente de sus errores.',
        'interpretation': 'Victimization',
        'id': 'dataInterCondemnation5',
        'valueA': 0,
        'valueB': 1
    },
    {
        'question': '44.- Normalmente acepto las cosas como son aunque no me gusten.',
        'interpretation': 'Victimization',
        'id': 'dataInterBTF5',
        'valueA': 0,
        'valueB': 1
    },
    {
        'question': '45.- Nadie está mucho tiempo enfadado, a menos que quiera estarlo.',
        'interpretation': 'Victimization',
        'id': 'dataInterVictimization5',
        'valueA': 0,
        'valueB': 1
    },
    {
        'question': '46.- No puedo soportar correr riesgos.',
        'interpretation': 'Victimization',
        'id': 'dataInterAnxious5',
        'valueA': 1,
        'valueB': 0
    },
    {
        'question': '47.- La vida es demasiado corta para pasarla haciendo cosas que a uno no le gustan.',
        'interpretation': 'Victimization',
        'id': 'dataInterAvoidant5',
        'valueA': 1,
        'valueB': 0
    },
    {
        'question': '48.- Me gusta valerme por mi mismo.',
        'interpretation': 'Victimization',
        'id': 'dataInterInsecure5',
        'valueA': 0,
        'valueB': 1
    },
    {
        'question': '49.- Si hubiera vivido experiencias distintas, podría ser más como me gustaría ser.',
        'interpretation': 'Victimization',
        'id': 'dataInterPast5',
        'valueA': 1,
        'valueB': 0
    },
    {
        'question': '50.- Me gustaría jubilarme y apartarme totalmente del trabajo.',
        'interpretation': 'Victimization',
        'id': 'dataInterProcrastination5',
        'valueA': 1,
        'valueB': 0
    },
    {
        'question': '51.- Pienso que es duro ir en contra de lo que piensan los demás.',
        'interpretation': 'Anxious',
        'id': 'dataInterSearch6',
        'valueA': 1,
        'valueB': 0
    },
    {
        'question': '52.- Disfruto de las actividades independientemente de lo bueno/malo que sea en ellas.',
        'interpretation': 'Anxious',
        'id': 'dataInterPerfection6',
        'valueA': 0,
        'valueB': 1
    },
    {
        'question': '53.- El miedo al castigo es lo que hace a la gente ser buena.',
        'interpretation': 'Anxious',
        'id': 'dataInterCondemnation6',
        'valueA': 1,
        'valueB': 0
    },
    {
        'question': '54.- Si las cosas me desagradan, opto por ignorarlas.',
        'interpretation': 'Anxious',
        'id': 'dataInterBTF6',
        'valueA': 0,
        'valueB': 1
    },
    {
        'question': '55.- Cuanto mas problemas tiene una persona, menos feliz es.',
        'interpretation': 'Anxious',
        'id': 'dataInterVictimization6',
        'valueA': 1,
        'valueB': 0
    },
    {
        'question': '56.- Raramente me siento ansioso al pensar en el futuro.',
        'interpretation': 'Anxious',
        'id': 'dataInterAnxious6',
        'valueA': 0,
        'valueB': 1
    },
    {
        'question': '57.- Raramente aplazo las cosas.',
        'interpretation': 'Anxious',
        'id': 'dataInterAvoidant6',
        'valueA': 0,
        'valueB': 1
    },
    {
        'question': '58.- Yo soy el único que realmente puede entender y solucionar mis problemas. ',
        'interpretation': 'Anxious',
        'id': 'dataInterInsecure6',
        'valueA': 0,
        'valueB': 1
    },
    {
        'question': '59.- Normalmente no pienso que las experiencias pasadas me afecten en la actualidad.',
        'interpretation': 'Anxious',
        'id': 'dataInterPast6',
        'valueA': 0,
        'valueB': 1
    },
    {
        'question': '60.- Tener demasiado tiempo libre resulta aburrido.',
        'interpretation': 'Anxious',
        'id': 'dataInterProcrastination6',
        'valueA': 0,
        'valueB': 1
    },
    {
        'question': '61.- Me gusta recibir la aprobación de los demás, pero no tengo necesidad real de ello.',
        'interpretation': 'Avoidant',
        'id': 'dataInterSearch7',
        'valueA': 0,
        'valueB': 1
    },
    {
        'question': '62.- Me fastidia que los demás sean mejores que yo en algo.',
        'interpretation': 'Avoidant',
        'id': 'dataInterPerfection7',
        'valueA': 1,
        'valueB': 0
    },
    {
        'question': '63.- Todo el mundo es, esencialmente, bueno.',
        'interpretation': 'Avoidant',
        'id': 'dataInterCondemnation7',
        'valueA': 1,
        'valueB': 0
    },
    {
        'question': '64.- Hago todo lo que puedo por conseguir lo que quiero y una vez conseguido, deja de preocuparme.',
        'interpretation': 'Avoidant',
        'id': 'dataInterBTF7',
        'valueA': 0,
        'valueB': 1
    },
    {
        'question': '65.- Nada es intrínsecamente perturbador, si lo es, se debe al modo en que lo interpretamos.',
        'interpretation': 'Avoidant',
        'id': 'dataInterVictimization7',
        'valueA': 0,
        'valueB': 1
    },
    {
        'question': '66.- Me preocupan mucho determinadas cosas del futuro.',
        'interpretation': 'Avoidant',
        'id': 'dataInterAnxious7',
        'valueA': 1,
        'valueB': 0
    },
    {
        'question': '67.- Me resulta difícil hacer las tareas desagradables.',
        'interpretation': 'Avoidant',
        'id': 'dataInterAvoidant7',
        'valueA': 1,
        'valueB': 0
    },
    {
        'question': '68.- Me desagrada que los demás tomen decisiones por mí.',
        'interpretation': 'Avoidant',
        'id': 'dataInterInsecure7',
        'valueA': 0,
        'valueB': 1
    },
    {
        'question': '69.- Somos esclavos de nuestro pasado.',
        'interpretation': 'Avoidant',
        'id': 'dataInterPast7',
        'valueA': 1,
        'valueB': 0
    },
    {
        'question': '70.- A veces desearía poder irme a una isla tropical, y tenderme en la playa sin hacer nada más.',
        'interpretation': 'Avoidant',
        'id': 'dataInterProcrastination7',
        'valueA': 1,
        'valueB': 0
    },
    {
        'question': '71.- A menudo me preocupa que la gente me apruebe y me acepte.',
        'interpretation': 'Insecure',
        'id': 'dataInterSearch8',
        'valueA': 1,
        'valueB': 0
    },
    {
        'question': '72.- Me trastorna cometer errores.',
        'interpretation': 'Insecure',
        'id': 'dataInterPerfection8',
        'valueA': 1,
        'valueB': 0
    },
    {
        'question': '73.- No es equitativo que “llueva igual sobre el justo que sobre el injusto”.',
        'interpretation': 'Insecure',
        'id': 'dataInterCondemnation8',
        'valueA': 1,
        'valueB': 0
    },
    {
        'question': '74.- Yo disfruto honradamente de la vida.',
        'interpretation': 'Insecure',
        'id': 'dataInterBTF8',
        'valueA': 0,
        'valueB': 1
    },
    {
        'question': '75.- Debería haber mas personas que afrontaran lo desagradable de la vida.',
        'interpretation': 'Insecure',
        'id': 'dataInterVictimization8',
        'valueA': 1,
        'valueB': 0
    },
    {
        'question': '76.- Algunas veces me resulta imposible apartar de mi mente el miedo a algo.',
        'interpretation': 'Insecure',
        'id': 'dataInterAnxious8',
        'valueA': 1,
        'valueB': 0
    },
    {
        'question': '77.- Una vida fácil, muy pocas veces resulta compensadora.',
        'interpretation': 'Insecure',
        'id': 'dataInterAvoidant8',
        'valueA': 0,
        'valueB': 1
    },
    {
        'question': '78.- Pienso que es fácil buscar ayuda.',
        'interpretation': 'Insecure',
        'id': 'dataInterInsecure8',
        'valueA': 1,
        'valueB': 0
    },
    {
        'question': '79.- Una vez que algo afecta a tu vida de forma importante, seguirá haciéndolo siempre.',
        'interpretation': 'Insecure',
        'id': 'dataInterPast8',
        'valueA': 1,
        'valueB': 0
    },
    {
        'question': '80.- Me encanta estar tumbado.',
        'interpretation': 'Insecure',
        'id': 'dataInterProcrastination8',
        'valueA': 1,
        'valueB': 0
    },
    {
        'question': '81.- Tengo considerable preocupación por lo que la gente piensa de mí.',
        'interpretation': 'Past',
        'id': 'dataInterSearch9',
        'valueA': 1,
        'valueB': 0
    },
    {
        'question': '82.- Muchas veces me enfado muchísimo por cosas sin importancia.',
        'interpretation': 'Past',
        'id': 'dataInterPerfection9',
        'valueA': 1,
        'valueB': 0
    },
    {
        'question': '83.- Generalmente doy una segunda oportunidad a quién se equivoca.',
        'interpretation': 'Past',
        'id': 'dataInterCondemnation9',
        'valueA': 0,
        'valueB': 1
    },
    {
        'question': '84.- La gente es más feliz cuando tiene metas y problemas que resolver.',
        'interpretation': 'Past',
        'id': 'dataInterBTF9',
        'valueA': 1,
        'valueB': 0
    },
    {
        'question': '85.- Nunca hay razón para permanecer afligido mucho tiempo.',
        'interpretation': 'Past',
        'id': 'dataInterVictimization9',
        'valueA': 0,
        'valueB': 1
    },
    {
        'question': '86.- Raramente pienso en cosas como la muerte o la guerra nuclear.',
        'interpretation': 'Past',
        'id': 'dataInterAnxious9',
        'valueA': 0,
        'valueB': 1
    },
    {
        'question': '87.- No me gustan las responsabilidades.',
        'interpretation': 'Past',
        'id': 'dataInterAvoidant9',
        'valueA': 0,
        'valueB': 1
    },
    {
        'question': '88.- No me gusta depender de los demás.',
        'interpretation': 'Past',
        'id': 'dataInterInsecure9',
        'valueA': 0,
        'valueB': 1
    },
    {
        'question': '89.- La gente nunca cambia básicamente.',
        'interpretation': 'Past',
        'id': 'dataInterPast9',
        'valueA': 1,
        'valueB': 0
    },
    {
        'question': '90.- La mayoría de las personas trabajan demasiado y no descansan lo suficiente.',
        'interpretation': 'Past',
        'id': 'dataInterProcrastination9',
        'valueA': 1,
        'valueB': 0
    },
    {
        'question': '91.- Ser criticado es algo fastidioso pero no perturbador.',
        'interpretation': 'Procrastination',
        'id': 'dataInterSearch10',
        'valueA': 0,
        'valueB': 1
    },
    {
        'question': '92.- No me gusta hacer aquellas cosas que no hago del todo bien.',
        'interpretation': 'Procrastination',
        'id': 'dataInterPerfection10',
        'valueA': 0,
        'valueB': 1
    },
    {
        'question': '93.- Nadie es malo a pesar de que sus actos los sean.',
        'interpretation': 'Procrastination',
        'id': 'dataInterCondemnation10',
        'valueA': 0,
        'valueB': 1
    },
    {
        'question': '94.- Raramente me importunan los errores de los demás.',
        'interpretation': 'Procrastination',
        'id': 'dataInterBTF10',
        'valueA': 0,
        'valueB': 1
    },
    {
        'question': '95.- El hombre construye su propio infierno interior.',
        'interpretation': 'Procrastination',
        'id': 'dataInterVictimization10',
        'valueA': 0,
        'valueB': 1
    },
    {
        'question': '96.- Muchas veces me sorprendo planeando lo que haría si me encontrara en determinadas situaciones de peligro.',
        'interpretation': 'Procrastination',
        'id': 'dataInterAnxious10',
        'valueA': 1,
        'valueB': 0
    },
    {
        'question': '97.- Si tengo que hacer algo lo hago a pesar de que no sea agradable.',
        'interpretation': 'Procrastination',
        'id': 'dataInterAvoidant10',
        'valueA': 0,
        'valueB': 1
    },
    {
        'question': '98.- He aprendido a no estar pendiente de nada que no esté relacionado con mi bienestar.',
        'interpretation': 'Procrastination',
        'id': 'dataInterInsecure10',
        'valueA': 0,
        'valueB': 1
    },
    {
        'question': '99.- No miro atrás con resentimiento.',
        'interpretation': 'Procrastination',
        'id': 'dataInterPast10',
        'valueA': 0,
        'valueB': 1
    },
    {
        'question': '100.- No me siento realmente contento hasta que no estoy relajado y sin hacer nada.',
        'interpretation': 'Procrastination',
        'id': 'dataInterProcrastination10',
        'valueA': 1,
        'valueB': 0
    },
]

export default questions
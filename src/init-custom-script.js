'use strict';var all_of_the_type_query='SELECT DISTINCT ?uri ?label\nWHERE {\n    ?uri <http://www.wikidata.org/prop/direct/P31>  $range .\n    ?uri rdfs:label ?label .\n    FILTER(isIRI(?uri))\n    FILTER(lang(?label) = "" || lang(?label) = $lang)\n    FILTER(CONTAINS(LCASE(STR(?label)), LCASE("$key")))\n}\nLIMIT 50\nORDER BY ?label\n',basic_query='SELECT DISTINCT ?uri ?label\nWHERE {\n    ?domain <http://www.wikidata.org/prop/direct/P31>  $domain .\n    ?domain $property ?uri .\n    ?uri rdfs:label ?label .\n    FILTER(isIRI(?uri))\n    FILTER(lang(?label) = "" || lang(?label) = $lang)\n    FILTER(CONTAINS(LCASE(STR(?label)), LCASE("$key")))\n}\nLIMIT 50\nORDER BY ?label\n',
  basic_query_in_humans='SELECT DISTINCT ?uri ?label\nWHERE {\n    ?domain <http://www.wikidata.org/prop/direct/P31>  $domain .\n    ?domain $property ?uri .\n    ?uri <http://www.wikidata.org/prop/direct/P703>  wd:Q15978631 .\n    ?uri rdfs:label ?label .\n    FILTER(isIRI(?uri)) .\n    FILTER(lang(?label) = "" || lang(?label) = $lang) . \n    FILTER(CONTAINS(LCASE(STR(?label)), LCASE("$key"))) .\n}\nORDER BY ?label\nLIMIT 50',basic_query_domain_in_humans='SELECT DISTINCT ?uri ?label\nWHERE {\n    ?domain <http://www.wikidata.org/prop/direct/P31>  $domain .\n    ?domain $property ?uri .\n    ?domain <http://www.wikidata.org/prop/direct/P703>  wd:Q15978631 .\n    ?uri rdfs:label ?label .\n    FILTER(isIRI(?uri)) .\n    FILTER(lang(?label) = "" || lang(?label) = $lang) . \n    FILTER(CONTAINS(LCASE(STR(?label)), LCASE("$key"))) .\n}\nORDER BY ?label\nLIMIT 50',
  config={"@context":{Ontology:"http://www.w3.org/2002/07/owl#Ontology",Class:"http://www.w3.org/2002/07/owl#Class",ObjectProperty:"http://www.w3.org/2002/07/owl#ObjectProperty",label:"http://www.w3.org/2000/01/rdf-schema#label",domain:{"@id":"http://www.w3.org/2000/01/rdf-schema#domain","@type":"@id"},range:{"@id":"http://www.w3.org/2000/01/rdf-schema#range","@type":"@id"},unionOf:{"@id":"http://www.w3.org/2002/07/owl#unionOf","@type":"@id"},subPropertyOf:{"@id":"http://www.w3.org/2000/01/rdf-schema#subPropertyOf",
        "@type":"@id"},faIcon:"http://data.sparna.fr/ontologies/sparnatural-config-core#faIcon",sparqlString:"http://data.sparna.fr/ontologies/sparnatural-config-core#equivalentPath",sparnatural:"http://data.sparna.fr/ontologies/sparnatural-config-core#",datasources:"http://data.sparna.fr/ontologies/sparnatural-config-datasources#"},"@graph":[{"@id":"http://www.wikidata.org/entity/Q28885102","@type":"Class",faIcon:"fas fa-capsules",label:[{"@language":"en","@value":"Drug"}]},{"@id":"http://www.wikidata.org/entity/Q12136",
      "@type":"Class",faIcon:"fas fa-viruses",label:[{"@language":"en","@value":"Disease"}]},{"@id":"http://www.wikidata.org/entity/Q169872","@type":"Class",faIcon:"fas fa-head-side-cough",label:[{"@language":"en","@value":"Symptom"}]},{"@id":"http://www.wikidata.org/entity/Q7187","@type":"Class",faIcon:"fas fa-dna",label:[{"@language":"en","@value":"Gene"}]},{"@id":"http://www.wikidata.org/entity/Q37748","@type":"Class",faIcon:"fas fa-grip-lines-vertical",label:[{"@language":"en","@value":"Chromosome"}]},
      {"@id":"http://www.wikidata.org/entity/Q189118","@type":"Class",faIcon:"fas fa-bullseye",label:[{"@language":"en","@value":"Cell Type"}]},{"@id":"http://www.wikidata.org/entity/Q8054","@type":"Class",faIcon:"fas fa-certificate",label:[{"@language":"en","@value":"Protein"}]},{"@id":"http://www.wikidata.org/entity/Q2996394","@type":"Class",faIcon:"fas fa-egg",label:[{"@language":"en","@value":"Biological Process"}]},{"@id":"http://www.wikidata.org/entity/Q5058355","@type":"Class",faIcon:"fas fa-cloudsmith",
        label:[{"@language":"en","@value":"Cell Component"}]},{"@id":"http://www.wikidata.org/entity/Q79529","@type":"Class",faIcon:"fas fa-flask",label:[{"@language":"en","@value":"Chemical Substance"}]},{"@id":"http://www.wikidata.org/entity/Q4936952","@type":"Class",faIcon:"fas fa-lungs",label:[{"@language":"en","@value":"Anatomical Structure"}]},{"@id":"http://www.wikidata.org/entity/Q55215251","@type":"Class",faIcon:"fas fa-stethoscope",label:[{"@language":"en","@value":"Medical Test"}]},{"@id":"http://www.wikidata.org/entity/Q621636",
        "@type":"Class",faIcon:"fas fa-syringe",label:[{"@language":"en","@value":"Route of Administration"}]},{"@id":"http://www.wikidata.org/entity/Q1348351","@type":"Class",faIcon:"fas fa-sitemap",label:[{"@language":"en","@value":"Mode of Inheritance"}]},{"@id":"http://www.wikidata.org/entity/Q16521","@type":"Class",faIcon:"fas fa-paw",label:[{"@language":"en","@value":"Organism"}]},{"@id":"http://www.wikidata.org/entity/Q28123509","@type":"Class",faIcon:"fas fa-baby-carriage",label:[{"@language":"en",
          "@value":"US Pregnancy Category"}]},{"@id":"http://www.wikidata.org/entity/Q15304597","@type":"Class",faIcon:"fas fa-dna",label:[{"@language":"en","@value":"Gene Variant"}]},{"@id":"http://www.wikidata.org/entity/Q5","@type":"Class",faIcon:"fas fa-person",label:[{"@language":"en","@value":"Person"}]},{"@id":"http://www.wikidata.org/entity/Q43229","@type":"Class",faIcon:"fas fa-building-columns",label:[{"@language":"en","@value":"Organization"}]},{"@id":"http://www.wikidata.org/entity/Q13442814","@type":"Class",
        faIcon:"fas fa-newspaper",label:[{"@language":"en","@value":"Publication"}]},{"@id":"http://www.wikidata.org/entity/Q6256","@type":"Class",faIcon:"fas fa-earth-americas",label:[{"@language":"en","@value":"Country"}]},{"@id":"http://www.wikidata.org/entity/Q737498","@type":"Class",faIcon:"fas fa-newspaper",label:[{"@language":"en","@value":"Publisher"}]},{"@id":"http://www.wikidata.org/entity/Q1047113","@type":"Class",faIcon:"fas fa-face-glasses",label:[{"@language":"en","@value":"Specialty"}]},{"@id":"http://www.wikidata.org/entity/Q66439731",
        "@type":"Class",faIcon:"fas fa-block-brick-fire",label:[{"@language":"en","@value":"Access Status"}]},{"@id":"http://www.wikidata.org/entity/Q618779","@type":"Class",faIcon:"fas fa-face-glasses",label:[{"@language":"en","@value":"Award"}]},{"@id":"http://www.wikidata.org/entity/Q30612","@type":"Class",faIcon:"fas fa-stethoscope",label:[{"@language":"en","@value":"Clinical Trial"}]},{"@id":"http://www.wikidata.org/prop/direct/P4545","@type":"ObjectProperty",datasource:{queryString:basic_query},domain:"http://www.wikidata.org/entity/Q4936952",
        label:[{"@language":"en","@value":"sexually homologous with"}],range:"http://www.wikidata.org/entity/Q4936952",subPropertyOf:"sparnatural:AutocompleteProperty"},{"@id":"http://www.wikidata.org/prop/direct/P8872","@type":"ObjectProperty",datasource:{queryString:basic_query_in_humans},domain:"http://www.wikidata.org/entity/Q189118",label:[{"@language":"en","@value":"has marker"}],range:"http://www.wikidata.org/entity/Q7187",subPropertyOf:"sparnatural:AutocompleteProperty"},{"@id":"http://www.wikidata.org/prop/direct/P927",
        "@type":"ObjectProperty",datasource:{queryString:basic_query},domain:"http://www.wikidata.org/entity/Q189118",label:[{"@language":"en","@value":"anatomical location"}],range:"http://www.wikidata.org/entity/Q4936952",subPropertyOf:"sparnatural:AutocompleteProperty"},{"@id":"http://www.wikidata.org/prop/direct/P129","@type":"ObjectProperty",datasource:{queryString:basic_query_in_humans},domain:"http://www.wikidata.org/entity/Q79529",label:[{"@language":"en","@value":"binds"}],range:"http://www.wikidata.org/entity/Q8054",
        subPropertyOf:"sparnatural:AutocompleteProperty"},{"@id":"http://www.wikidata.org/prop/direct/P1582","@type":"ObjectProperty",datasource:{queryString:basic_query},domain:"http://www.wikidata.org/entity/Q79529",label:[{"@language":"en","@value":"natural product of taxon"}],range:"http://www.wikidata.org/entity/Q16521",subPropertyOf:"sparnatural:AutocompleteProperty"},{"@id":"http://www.wikidata.org/prop/direct/P3780","@type":"ObjectProperty",datasource:{queryString:basic_query},domain:"http://www.wikidata.org/entity/Q79529",
        label:[{"@language":"en","@value":"active ingredient in"}],range:"http://www.wikidata.org/entity/Q28885102",subPropertyOf:"sparnatural:AutocompleteProperty"},{"@id":"http://www.wikidata.org/prop/direct/P1060","@type":"ObjectProperty",datasource:{queryString:basic_query},domain:"http://www.wikidata.org/entity/Q12136",label:[{"@language":"en","@value":"transmission process"}],range:"http://www.wikidata.org/entity/Q2996394",subPropertyOf:"sparnatural:AutocompleteProperty"},{"@id":"http://www.wikidata.org/prop/direct/P1199",
        "@type":"ObjectProperty",datasource:{queryString:basic_query},domain:"http://www.wikidata.org/entity/Q12136",label:[{"@language":"en","@value":"mode of inheritance"}],range:"http://www.wikidata.org/entity/Q1348351",subPropertyOf:"sparnatural:AutocompleteProperty"},{"@id":"http://www.wikidata.org/prop/direct/P828","@type":"ObjectProperty",datasource:{queryString:basic_query},domain:"http://www.wikidata.org/entity/Q12136",label:[{"@language":"en","@value":"has cause"}],range:"http://www.wikidata.org/entity/Q16521",
        subPropertyOf:"sparnatural:AutocompleteProperty"},{"@id":"http://www.wikidata.org/prop/direct/P1605","@type":"ObjectProperty",datasource:{queryString:basic_query},domain:"http://www.wikidata.org/entity/Q12136",label:[{"@language":"en","@value":"has natural reservoir"}],range:"http://www.wikidata.org/entity/Q16521",subPropertyOf:"sparnatural:AutocompleteProperty"},{"@id":"http://www.wikidata.org/prop/direct/P2176","@type":"ObjectProperty",datasource:{queryString:basic_query},domain:"http://www.wikidata.org/entity/Q12136",
        label:[{"@language":"en","@value":"treated by"}],range:"http://www.wikidata.org/entity/Q28885102",subPropertyOf:"sparnatural:AutocompleteProperty"},{"@id":"http://www.wikidata.org/prop/direct/P2293","@type":"ObjectProperty",datasource:{queryString:basic_query_in_humans},domain:"http://www.wikidata.org/entity/Q12136",label:[{"@language":"en","@value":"genetic association"}],range:"http://www.wikidata.org/entity/Q7187",subPropertyOf:"sparnatural:AutocompleteProperty"},{"@id":"http://www.wikidata.org/prop/direct/P689",
        "@type":"ObjectProperty",datasource:{queryString:basic_query},domain:"http://www.wikidata.org/entity/Q12136",label:[{"@language":"en","@value":"afflicts"}],range:"http://www.wikidata.org/entity/Q4936952",subPropertyOf:"sparnatural:AutocompleteProperty"},{"@id":"http://www.wikidata.org/prop/direct/P7500","@type":"ObjectProperty",datasource:{queryString:basic_query},domain:"http://www.wikidata.org/entity/Q12136",label:[{"@language":"en","@value":"comorbidity"}],range:"http://www.wikidata.org/entity/Q12136",
        subPropertyOf:"sparnatural:AutocompleteProperty"},{"@id":"http://www.wikidata.org/prop/direct/P780","@type":"ObjectProperty",datasource:{queryString:basic_query},domain:"http://www.wikidata.org/entity/Q12136",label:[{"@language":"en","@value":"has symptom"}],range:"http://www.wikidata.org/entity/Q169872",subPropertyOf:"sparnatural:AutocompleteProperty"},{"@id":"http://www.wikidata.org/prop/direct/P923","@type":"ObjectProperty",datasource:{queryString:basic_query},domain:"http://www.wikidata.org/entity/Q12136",
        label:[{"@language":"en","@value":"medical examinations"}],range:"http://www.wikidata.org/entity/Q55215251",subPropertyOf:"sparnatural:AutocompleteProperty"},{"@id":"http://www.wikidata.org/prop/direct/P1909","@type":"ObjectProperty",datasource:{queryString:basic_query},domain:"http://www.wikidata.org/entity/Q28885102",label:[{"@language":"en","@value":"side effect"}],range:"http://www.wikidata.org/entity/Q169872",subPropertyOf:"sparnatural:AutocompleteProperty"},{"@id":"http://www.wikidata.org/prop/direct/P2175",
        "@type":"ObjectProperty",datasource:{queryString:basic_query},domain:"http://www.wikidata.org/entity/Q28885102",label:[{"@language":"en","@value":"treats"}],range:"http://www.wikidata.org/entity/Q12136",subPropertyOf:"sparnatural:AutocompleteProperty"},{"@id":"http://www.wikidata.org/prop/direct/P3489","@type":"ObjectProperty",datasource:{queryString:basic_query},domain:"http://www.wikidata.org/entity/Q28885102",label:[{"@language":"en","@value":"pregnancy category"}],range:"http://www.wikidata.org/entity/Q28123509",
        subPropertyOf:"sparnatural:AutocompleteProperty"},{"@id":"http://www.wikidata.org/prop/direct/P3781","@type":"ObjectProperty",datasource:{queryString:basic_query},domain:"http://www.wikidata.org/entity/Q28885102",label:[{"@language":"en","@value":"has active ingredient"}],range:"http://www.wikidata.org/entity/Q79529",subPropertyOf:"sparnatural:AutocompleteProperty"},{"@id":"http://www.wikidata.org/prop/direct/P4954","@type":"ObjectProperty",datasource:{queryString:basic_query},domain:"http://www.wikidata.org/entity/Q28885102",
        label:[{"@language":"en","@value":"may prevent"}],range:"http://www.wikidata.org/entity/Q12136",subPropertyOf:"sparnatural:AutocompleteProperty"},{"@id":"http://www.wikidata.org/prop/direct/P636","@type":"ObjectProperty",datasource:{queryString:basic_query},domain:"http://www.wikidata.org/entity/Q28885102",label:[{"@language":"en","@value":"administration"}],range:"http://www.wikidata.org/entity/Q621636",subPropertyOf:"sparnatural:AutocompleteProperty"},{"@id":"http://www.wikidata.org/prop/direct/P769",
        "@type":"ObjectProperty",datasource:{queryString:basic_query},domain:"http://www.wikidata.org/entity/Q28885102",label:[{"@language":"en","@value":"significant drug interaction"}],range:"http://www.wikidata.org/entity/Q28885102",subPropertyOf:"sparnatural:AutocompleteProperty"},{"@id":"http://www.wikidata.org/prop/direct/P1057","@type":"ObjectProperty",datasource:{queryString:basic_query_in_humans},domain:"http://www.wikidata.org/entity/Q7187",label:[{"@language":"en","@value":"present in chromosome"}],
        range:"http://www.wikidata.org/entity/Q37748",subPropertyOf:"sparnatural:AutocompleteProperty"},{"@id":"http://www.wikidata.org/prop/direct/P688","@type":"ObjectProperty",datasource:{queryString:basic_query_in_humans},domain:"http://www.wikidata.org/entity/Q7187",label:[{"@language":"en","@value":"encodes"}],range:"http://www.wikidata.org/entity/Q8054",subPropertyOf:"sparnatural:AutocompleteProperty"},{"@id":"http://www.wikidata.org/prop/direct/P3433","@type":"ObjectProperty",datasource:{queryString:basic_query_in_humans},
        domain:"http://www.wikidata.org/entity/Q15304597",label:[{"@language":"en","@value":"variant of"}],range:"http://www.wikidata.org/entity/Q7187",subPropertyOf:"sparnatural:AutocompleteProperty"},{"@id":"http://www.wikidata.org/prop/direct/P1606","@type":"ObjectProperty",datasource:{queryString:basic_query},domain:"http://www.wikidata.org/entity/Q16521",label:[{"@language":"en","@value":"natural reservoir of"}],range:"http://www.wikidata.org/entity/Q12136",subPropertyOf:"sparnatural:AutocompleteProperty"},
      {"@id":"http://www.wikidata.org/prop/direct/P171","@type":"ObjectProperty",datasource:{queryString:basic_query},domain:"http://www.wikidata.org/entity/Q16521",label:[{"@language":"en","@value":"parent taxon"}],range:"http://www.wikidata.org/entity/Q16521",subPropertyOf:"sparnatural:AutocompleteProperty"},{"@id":"http://www.wikidata.org/prop/direct/P8339","@type":"ObjectProperty",datasource:{queryString:basic_query},domain:"http://www.wikidata.org/entity/Q16521",label:[{"@language":"en","@value":"entry receptor"}],
        range:"http://www.wikidata.org/entity/Q8054",subPropertyOf:"sparnatural:AutocompleteProperty"},{"@id":"http://www.wikidata.org/prop/direct/P10228","@type":"ObjectProperty",datasource:{queryString:basic_query},domain:"http://www.wikidata.org/entity/Q8054",label:[{"@language":"en","@value":"facilitates flow of"}],range:"http://www.wikidata.org/entity/Q79529",subPropertyOf:"sparnatural:AutocompleteProperty"},{"@id":"http://www.wikidata.org/prop/direct/P681","@type":"ObjectProperty",datasource:{queryString:basic_query_domain_in_humans},
        domain:"http://www.wikidata.org/entity/Q8054",label:[{"@language":"en","@value":"present in component"}],range:"http://www.wikidata.org/entity/Q5058355",subPropertyOf:"sparnatural:AutocompleteProperty"},{"@id":"http://www.wikidata.org/prop/direct/P682","@type":"ObjectProperty",datasource:{queryString:basic_query_domain_in_humans},domain:"http://www.wikidata.org/entity/Q8054",label:[{"@language":"en","@value":"participates in process"}],range:"http://www.wikidata.org/entity/Q2996394",subPropertyOf:"sparnatural:AutocompleteProperty"},
      {"@id":"http://www.wikidata.org/prop/direct/P702","@type":"ObjectProperty",datasource:{queryString:basic_query_in_humans},domain:"http://www.wikidata.org/entity/Q8054",label:[{"@language":"en","@value":"encoded by"}],range:"http://www.wikidata.org/entity/Q7187",subPropertyOf:"sparnatural:AutocompleteProperty"},{"@id":"http://www.wikidata.org/prop/direct/P1066","@type":"ObjectProperty",datasource:{queryString:basic_query},domain:"http://www.wikidata.org/entity/Q43229",label:[{"@language":"en","@value":"founded by"}],
        range:"http://www.wikidata.org/entity/Q5",subPropertyOf:"sparnatural:AutocompleteProperty"},{"@id":"http://www.wikidata.org/prop/direct/P17","@type":"ObjectProperty",datasource:{queryString:all_of_the_type_query},domain:"http://www.wikidata.org/entity/Q43229",label:[{"@language":"en","@value":"country"}],range:"http://www.wikidata.org/entity/Q6256",subPropertyOf:"sparnatural:AutocompleteProperty"},{"@id":"http://www.wikidata.org/prop/direct/P3320","@type":"ObjectProperty",datasource:{queryString:basic_query},
        domain:"http://www.wikidata.org/entity/Q43229",label:[{"@language":"en","@value":"board member"}],range:"http://www.wikidata.org/entity/Q5",subPropertyOf:"sparnatural:AutocompleteProperty"},{"@id":"http://www.wikidata.org/prop/direct/P488","@type":"ObjectProperty",datasource:{queryString:basic_query},domain:"http://www.wikidata.org/entity/Q43229",label:[{"@language":"en","@value":"chairperson"}],range:"http://www.wikidata.org/entity/Q5",subPropertyOf:"sparnatural:AutocompleteProperty"},{"@id":"http://www.wikidata.org/prop/direct/P749",
        "@type":"ObjectProperty",datasource:{queryString:basic_query},domain:"http://www.wikidata.org/entity/Q43229",label:[{"@language":"en","@value":"parent organization"}],range:"http://www.wikidata.org/entity/Q43229",subPropertyOf:"sparnatural:AutocompleteProperty"},{"@id":"http://www.wikidata.org/prop/direct/P355","@type":"ObjectProperty",datasource:{queryString:basic_query},domain:"http://www.wikidata.org/entity/Q43229",label:[{"@language":"en","@value":"has subsidiary"}],range:"http://www.wikidata.org/entity/Q43229",
        subPropertyOf:"sparnatural:AutocompleteProperty"},{"@id":"http://www.wikidata.org/prop/direct/P108","@type":"ObjectProperty",datasource:{queryString:basic_query},domain:"http://www.wikidata.org/entity/Q5",label:[{"@language":"en","@value":"employer"}],range:"http://www.wikidata.org/entity/Q43229",subPropertyOf:"sparnatural:AutocompleteProperty"},{"@id":"http://www.wikidata.org/prop/direct/P69","@type":"ObjectProperty",datasource:{queryString:basic_query},domain:"http://www.wikidata.org/entity/Q5",
        label:[{"@language":"en","@value":"educated at"}],range:"http://www.wikidata.org/entity/Q43229",subPropertyOf:"sparnatural:AutocompleteProperty"},{"@id":"http://www.wikidata.org/prop/direct/P184","@type":"ObjectProperty",datasource:{queryString:basic_query},domain:"http://www.wikidata.org/entity/Q5",label:[{"@language":"en","@value":"doctoral advisor"}],range:"http://www.wikidata.org/entity/Q5",subPropertyOf:"sparnatural:AutocompleteProperty"},{"@id":"http://www.wikidata.org/prop/direct/P27","@type":"ObjectProperty",
        datasource:{queryString:all_of_the_type_query},domain:"http://www.wikidata.org/entity/Q5",label:[{"@language":"en","@value":"country of citizenship"}],range:"http://www.wikidata.org/entity/Q6256",subPropertyOf:"sparnatural:AutocompleteProperty"},{"@id":"http://www.wikidata.org/prop/direct/P7604","@type":"ObjectProperty",datasource:{queryString:basic_query},domain:"http://www.wikidata.org/entity/Q5",label:[{"@language":"en","@value":"supervised by"}],range:"http://www.wikidata.org/entity/Q5",subPropertyOf:"sparnatural:AutocompleteProperty"},
      {"@id":"http://www.wikidata.org/prop/direct/P802","@type":"ObjectProperty",datasource:{queryString:basic_query},domain:"http://www.wikidata.org/entity/Q5",label:[{"@language":"en","@value":"has student"}],range:"http://www.wikidata.org/entity/Q5",subPropertyOf:"sparnatural:AutocompleteProperty"},{"@id":"http://www.wikidata.org/prop/direct/P1066","@type":"ObjectProperty",datasource:{queryString:basic_query},domain:"http://www.wikidata.org/entity/Q5",label:[{"@language":"en","@value":"student of"}],
        range:"http://www.wikidata.org/entity/Q5",subPropertyOf:"sparnatural:AutocompleteProperty"},{"@id":"http://www.wikidata.org/prop/direct/P50","@type":"ObjectProperty",datasource:{queryString:basic_query},domain:"http://www.wikidata.org/entity/Q13442814",label:[{"@language":"en","@value":"author"}],range:"http://www.wikidata.org/entity/Q5",subPropertyOf:"sparnatural:AutocompleteProperty"},{"@id":"http://www.wikidata.org/prop/direct/P123","@type":"ObjectProperty",datasource:{queryString:basic_query},
        domain:"http://www.wikidata.org/entity/Q13442814",label:[{"@language":"en","@value":"published by"}],range:"http://www.wikidata.org/entity/Q737498",subPropertyOf:"sparnatural:AutocompleteProperty"},{"@id":"http://www.wikidata.org/prop/direct/P7137","@type":"ObjectProperty",datasource:{queryString:basic_query},domain:"http://www.wikidata.org/entity/Q13442814",label:[{"@language":"en","@value":"acknowledges"}],range:"http://www.wikidata.org/entity/Q5",subPropertyOf:"sparnatural:AutocompleteProperty"},
      {"@id":"http://www.wikidata.org/prop/direct/P825","@type":"ObjectProperty",datasource:{queryString:basic_query},domain:"http://www.wikidata.org/entity/Q13442814",label:[{"@language":"en","@value":"dedicated to"}],range:"http://www.wikidata.org/entity/Q5",subPropertyOf:"sparnatural:AutocompleteProperty"},{"@id":"http://www.wikidata.org/prop/direct/P2860","@type":"ObjectProperty",datasource:{queryString:basic_query},domain:"http://www.wikidata.org/entity/Q13442814",label:[{"@language":"en","@value":"cites"}],
        range:"http://www.wikidata.org/entity/Q13442814",subPropertyOf:"sparnatural:AutocompleteProperty"},{"@id":"http://www.wikidata.org/prop/direct/P921","@type":"ObjectProperty",datasource:{queryString:basic_query},domain:"http://www.wikidata.org/entity/Q737498",label:[{"@language":"en","@value":"main subject"}],range:"http://www.wikidata.org/entity/Q1047113",subPropertyOf:"sparnatural:AutocompleteProperty"},{"@id":"http://www.wikidata.org/prop/direct/P98","@type":"ObjectProperty",datasource:{queryString:basic_query},
        domain:"http://www.wikidata.org/entity/Q737498",label:[{"@language":"en","@value":"editor"}],range:"http://www.wikidata.org/entity/Q5",subPropertyOf:"sparnatural:AutocompleteProperty"},{"@id":"http://www.wikidata.org/prop/direct/P6954","@type":"ObjectProperty",datasource:{queryString:basic_query},domain:"http://www.wikidata.org/entity/Q737498",label:[{"@language":"en","@value":"access status"}],range:"http://www.wikidata.org/entity/Q66439731",subPropertyOf:"sparnatural:AutocompleteProperty"},{"@id":"http://www.wikidata.org/prop/direct/P166",
        "@type":"ObjectProperty",datasource:{queryString:basic_query},domain:"http://www.wikidata.org/entity/Q5",label:[{"@language":"en","@value":"award received"}],range:"http://www.wikidata.org/entity/Q618779",subPropertyOf:"sparnatural:AutocompleteProperty"},{"@id":"http://www.wikidata.org/prop/direct/P1050","@type":"ObjectProperty",datasource:{queryString:basic_query},domain:"http://www.wikidata.org/entity/Q30612",label:[{"@language":"en","@value":"medical condition"}],range:"http://www.wikidata.org/entity/Q12136",
        subPropertyOf:"sparnatural:AutocompleteProperty"},{"@id":"http://www.wikidata.org/prop/direct/P4844","@type":"ObjectProperty",datasource:{queryString:basic_query},domain:"http://www.wikidata.org/entity/Q30612",label:[{"@language":"en","@value":"research intervention"}],range:"http://www.wikidata.org/entity/Q28885102",subPropertyOf:"sparnatural:AutocompleteProperty"},{"@id":"http://www.wikidata.org/prop/direct/P5572","@type":"ObjectProperty",datasource:{queryString:basic_query},domain:"http://www.wikidata.org/entity/Q7187",
        label:[{"@language":"en","@value":"expressed in"}],range:"http://www.wikidata.org/entity/Q4936952",subPropertyOf:"sparnatural:AutocompleteProperty"}]};



$.urlParam = function(name){
  var results = new RegExp('[\\?&amp;]' + name + '=([^&amp;#]*)').exec(window.location.href);
  if(results == null) { return null; }
  return results[1] || 0;
}
var lang = ($.urlParam('lang') != null)?$.urlParam('lang'):'en';

var sparnatural;
$( document ).ready(function($) {

  sparnatural = document.getElementById('ui-search').Sparnatural({
    config: './config_python_test.ttl',
    language: lang,
    maxDepth: 4,
    addDistinct: true,
    sendQueryOnFirstClassSelected: true,
    backgroundBaseColor: '255,255,255',
    autocomplete: null,
    list: null,
    defaultEndpoint: $('#endpoint').text(),
    onQueryUpdated: function (queryString, queryJson) {
      queryString = semanticPostProcess(queryString, queryJson);
      queryString = rdfsLabelPostProcess(queryString, queryJson);
      queryString = orderByPostProcess(queryString, queryJson);
      queryString = wdtP31PostProcess(queryString, queryJson);
      $('#sparql code').html(queryString.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"));
      yasqe.setValue(queryString);
      // yasqe.query();
    },
    tooltipConfig : {
      delay: [800, 100],
      duration: [100, 100],
    },
    // triggered when "play" button is clicked
    onSubmit: function(form) {
      // enable loader on button
      form.sparnatural.enableLoading() ;
      // trigger the query from YasQE
      yasqe.query();
    }
  });

});
var displayLabelPostProcess = function (queryString, queryJson) {
  queryString = queryString.replace(new RegExp('}$'), "  OPTIONAL { ?this rdfs:label ?theLabel FILTER(lang(?theLabel) = 'fr') } \n}");
  queryString = queryString.replace(new RegExp('}$'), "  OPTIONAL { ?this skos:notation ?notation } \n}");
  queryString = queryString.replace(new RegExp('}$'), "}\nORDER BY ?notation");
  return queryString;
}

var orderByPostProcess = function (queryString, queryJson) {
  let var_now = "";
  let projections = "";
  for (let var_i=0; var_i<queryJson.variables.length; var_i++){
    var_now = queryJson.variables[var_i];
    projections = projections + ` ${var_now} ${var_now}_label`
  }
  queryString = queryString.replace(new RegExp('SELECT DISTINCT .*? WHERE'), `SELECT DISTINCT ${projections}`);
  return queryString;
}

var limitPostProcess = function (queryString, queryJson) {
  queryString = queryString.replace(new RegExp('$'), "\nLIMIT 1000");
  // queryString = queryString.replace(new RegExp('}$'), "}\nORDER BY ?label LIMIT 1000");
  // queryString = queryString.replace(new RegExp('}$'), "}\nLIMIT 1000");
  return queryString;
}

var wdtP31P279PostProcess = function (queryString, queryJson) {
  return queryString.replaceAll("rdf:type", "<http://www.wikidata.org/prop/direct/P31>/<http://www.wikidata.org/prop/direct/P279>*");
}

var wdtP31PostProcess = function (queryString, queryJson) {
  return queryString.replaceAll("rdf:type", "<http://www.wikidata.org/prop/direct/P31>");
}

var prefixesPostProcess = function (queryString, queryJson) {
  if (queryString.indexOf("rdf-schema#") == -1) {
    queryString = queryString.replace("SELECT ", "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> \nSELECT ");
  }
  return queryString;
}

var rdfsLabelPostProcess = function (queryString, queryJson) {
  let var_now = "";
  for (let var_i=0; var_i<queryJson.variables.length; var_i++){
    var_now = queryJson.variables[var_i];
    queryString = queryString.replace(new RegExp('}$'), `  ${var_now} rdfs:label ${var_now}_label FILTER(lang(${var_now}_label) = 'en') \n}`);
  }
  return queryString;
}

var semanticPostProcess = function (queryString, queryJson) {
  queryString = prefixesPostProcess(queryString, queryJson);
  queryString = sparnatural.expandSparql(queryString);
  return queryString;
}



const yasqe = new Yasqe(document.getElementById("yasqe"), {
  requestConfig: { endpoint: $('#endpoint').text() },
  copyEndpointOnNewTab: false
});

const yasr = new Yasr(document.getElementById("yasr"), {
  //this way, the URLs in the results are prettified using the defined prefixes in the query
  getUsedPrefixes : yasqe.getPrefixesFromQuery,
  "drawOutputSelector": false,
  "drawDownloadIcon": false,
  // avoid persistency side-effects
  "persistency": { "prefix": false, "results": { "key": false }}
});


// link yasqe and yasr
yasqe.on("queryResponse", function(_yasqe, response, duration) {
  yasr.setResponse(response, duration);
  sparnatural.disableLoading() ;
});

/*console.log('****************************');
var codec = require('json-url')('lzma');
codec.decompress(savedQuery).then(json => {
    console.log(json) ;
    sparnatural.loadData(json) ;

}) ;*/

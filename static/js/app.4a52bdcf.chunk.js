(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{127:function(e,t,a){"use strict";a.d(t,"a",(function(){return he}));var r=a(22),n=a.n(r),o=a(0),i=a.n(o),l=a(58),c=a(26),s=a(12),p=a(126),u=a(245),d=(a(151),a(28)),m=a.n(d),g=a(232),h=a(240),b=a(241),f=a(239),E=a(193),v=a(251),w=a(235),y=a(194),x=a(242),O=a(105),S=a.n(O),k=a(74),j=a.n(k),L=a(103),I=a.n(L),_=a(104),P=a.n(_),T=a(37),N=a.n(T),R=a(237),C=a(236),D=a(249),q=(a(248),a(247)),A=i.a.createContext(),U=a(250),B=a(246),M=a(238),W=a(102),F=a.n(W);function H(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function G(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?H(Object(a),!0).forEach((function(t){m()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):H(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var z=Object(g.a)((function(e){return{settingsForm:{width:"90%","& .MuiFormControl-root":{marginTop:e.spacing(1),marginBottom:e.spacing(1)},"& .MuiFormHelperText-root":{marginTop:e.spacing(0),marginBottom:e.spacing(1)}},saveButton:{textTransform:"none",margin:e.spacing(2,2)},fullWidth:{width:"100%"},normalFont:{fontSize:"14px"},smallerFont:{fontSize:"12px"},alignLeft:{textAlign:"left"},paperPadding:{padding:e.spacing(2,2),margin:e.spacing(2,2)},marginBottom:{marginBottom:e.spacing(1)},paperTitle:{fontWeight:300,marginBottom:e.spacing(1)}}}));function Q(){var e=z(),t=i.a.useState({solid_webid:"",search_text:"",describe_uri:"",describe_endpoint:"",open:!1,dialogOpen:!1,sparql_endpoint_autocomplete:"",openapi_url_autocomplete:"",comunica_url_autocomplete:"",filebrowser_url_autocomplete:""}),a=n()(t,2),r=a[0],o=a[1],l=i.a.useRef(r),c=i.a.useCallback((function(e){l.current=G(G({},l.current),e),o(l.current)}),[o]),s=i.a.useContext(A),p=n()(s,2),u=p[0],d=p[1];function m(e){console.log("Update state "),e&&e.target&&(e.target.value&&0!==e.target.value?c({sparql_endpoint_autocomplete:e.target.value}):c({sparql_endpoint_autocomplete:e.target.innerText}))}return i.a.createElement(C.a,{className:"mainContainer",style:{marginTop:"30px"}},i.a.createElement("form",{onSubmit:function(e){c({open:!0}),console.log("context before change, and sparql endpoint autocomplete value"),console.log(u),console.log(r.sparql_endpoint_autocomplete),d(r.sparql_endpoint_autocomplete),console.log("Context after setContext"),console.log(u),localStorage.setItem("intothegraphSettings",JSON.stringify({sparql_endpoint:r.sparql_endpoint_autocomplete}))}},i.a.createElement(U.a,{className:e.settingsForm},i.a.createElement(R.a,{variant:"h5",className:e.paperTitle},"SPARQL endpoint"),i.a.createElement(q.a,{onChange:m,onInputChange:m,id:"autocomplete-sparql-endpoint",options:["https://graphdb.dumontierlab.com/repositories/trek","https://graphdb.dumontierlab.com/repositories/bio2vec","https://graphdb.dumontierlab.com/repositories/ncats-red-kg","https://graphdb.dumontierlab.com/repositories/bio2rdf-ammar","https://bio2rdf.org/sparql","http://dbpedia.org/sparql","http://rdf.disgenet.org/sparql/","http://rdf.pathwaycommons.org/sparql/","https://stars-app.renci.org/uberongraph/sparql","http://w3id.org/FAIR_COVID19/sparql/","https://graphdb.dumontierlab.com/repositories/covid-kg","https://graphdb.dumontierlab.com/repositories/geoeconomics","https://data.gesis.org/claimskg/sparql","http://opencitations.net/index/sparql","http://opencitations.net/sparql","https://joinup.ec.europa.eu/sparql/","http://data.europa.eu/euodp/sparqlep","http://publications.europa.eu/webapi/rdf/sparql","http://digital-agenda-data.eu/data/sparql","http://data.persee.fr/sparql","http://lod.openlinksw.com/sparql","http://data.doremus.org/sparql","http://data.allie.dbcls.jp/sparql/","http://sparql.southgreen.fr","https://sparql.nextprot.org","http://localhost:7200/repositories/demo","http://localhost:8890/sparql","http://localhost:8082/bigdata/sparql"],freeSolo:!0,includeInputInList:!0,ListboxProps:{className:e.alignLeft},renderInput:function(e){return i.a.createElement(B.a,N()({},e,{label:"SPARQL endpoint URL",variant:"outlined"}))}}),i.a.createElement(M.a,{id:"helper-sparql-endpoint"},"SPARQL endpoint URL used by the into-the-graph app to resolve URIs."),i.a.createElement(f.a,{type:"submit",variant:"contained",color:"primary"},i.a.createElement(F.a,null),"\xa0Save settings"),i.a.createElement(D.a,{open:r.open,onClose:function(e,t){c({open:!1})},autoHideDuration:3e3}))))}function J(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function V(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?J(Object(a),!0).forEach((function(t){m()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):J(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var $=Object(g.a)((function(e){return{menuButton:{color:e.palette.common.white},solidButton:{backgroundColor:e.palette.primary.main,color:"#fff",borderRadius:"6px",padding:"7px 14px","&:hover":{backgroundColor:e.palette.primary.dark,cursor:"pointer"}},linkButton:{textTransform:"none",textDecoration:"none"},linkLogo:{alignItems:"center",display:"flex"},paperPadding:{padding:e.spacing(2,2),margin:e.spacing(2,2)},paperSearch:{padding:"2px 4px",display:"flex",alignItems:"center",width:"40%"},searchInput:{marginLeft:e.spacing(1),width:"50%",fontSize:"14px",flex:1},iconButton:{padding:5}}}));function X(e){var t=$(),a=i.a.useState({solid_webid:"",search_text:"",describe_uri:"",describe_endpoint:""}),r=n()(a,2),o=r[0],l=r[1],p=i.a.useState(null),u=n()(p,2),d=u[0],m=u[1],g=Boolean(d),O=g?"simple-popper":void 0,k=i.a.useRef(o),L=i.a.useCallback((function(e){k.current=V(V({},k.current),e),l(k.current)}),[l]),_=Object(s.e)();return i.a.createElement(h.a,{title:"",position:"static"},i.a.createElement(b.a,{variant:"dense"},i.a.createElement(c.b,{to:"/",className:t.linkButton},i.a.createElement(x.a,{title:"Into the Graph homepage"},i.a.createElement(f.a,{className:t.menuButton},i.a.createElement(I.a,null),"\xa0Into the graph"))),i.a.createElement(c.b,{to:"/describe?uri=http://bio2rdf.org/clinicaltrials:NCT00209495&endpoint=https://bio2rdf.org/sparql",className:t.linkButton},i.a.createElement(x.a,{title:"Describe an URI in a SPARQL endpoint"},i.a.createElement(f.a,{className:t.menuButton},i.a.createElement(j.a,null),"\xa0Describe URI"))),i.a.createElement("div",{className:"flexGrow"}),i.a.createElement(E.a,{component:"form",className:t.paperSearch,onSubmit:function(e){e.preventDefault(),_.push("/describe?uri="+o.search_text)}},i.a.createElement(v.a,{className:t.searchInput,placeholder:"Search",onChange:function(e){L({search_text:e.target.value})},inputProps:{"aria-label":"search"}}),i.a.createElement(w.a,{type:"submit",className:t.iconButton,"aria-label":"search"},i.a.createElement(j.a,null))),i.a.createElement(x.a,{title:"Application settings"},i.a.createElement(f.a,{className:t.menuButton,onClick:function(e){m(d?null:e.currentTarget)}},i.a.createElement(P.a,null))),i.a.createElement(x.a,{title:"Go to https://github.com/MaastrichtU-IDS/into-the-graph"},i.a.createElement(f.a,{className:t.menuButton,target:"_blank",href:"https://github.com/MaastrichtU-IDS/into-the-graph",rel:"noopener noreferrer"},i.a.createElement(S.a,null))),i.a.createElement(y.a,{id:O,open:g,anchorEl:d},i.a.createElement(E.a,{elevation:4,className:t.paperPadding},i.a.createElement(Q,null)))))}var K=Object(g.a)((function(e){return{darkLink:{textDecoration:"none",color:"inherit","&:hover":{color:e.palette.primary.light,textDecoration:"none"}},whiteLink:{textDecoration:"none",color:"inherit","&:hover":{color:e.palette.primary.dark,textDecoration:"none"}},footer:{padding:e.spacing(2),marginTop:"auto",color:"white",backgroundColor:e.palette.primary.main}}}));function Y(){var e=K();return i.a.createElement(R.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",i.a.createElement("a",{className:e.darkLink,target:"_blank",rel:"noopener noreferrer",href:"https://maastrichtuniversity.nl/ids"},"Institute of Data Science at Maastricht University")," ","2020.")}function Z(){var e=K();return i.a.createElement("footer",{className:e.footer},i.a.createElement(C.a,{maxWidth:"md",style:{textAlign:"center"}},i.a.createElement(R.a,{variant:"body2"},"This website is licensed under the\xa0",i.a.createElement("a",{className:e.whiteLink,target:"_blank",rel:"noopener noreferrer",href:"https://github.com/MaastrichtU-IDS/into-the-graph/blob/main/LICENSE"},"MIT license")),i.a.createElement(Y,null)))}function ee(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function te(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ee(Object(a),!0).forEach((function(t){m()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ee(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var ae=Object(g.a)((function(e){return{paperSearch:{padding:"2px 4px",display:"flex",alignItems:"center",width:"30%"},searchInput:{marginLeft:e.spacing(1),width:"50%",fontSize:"14px",flex:1},link:{textDecoration:"none",textTransform:"none",color:e.palette.primary.main,"&:hover":{color:e.palette.secondary.main,textDecoration:"none"}},paperPadding:{padding:e.spacing(2,2),margin:e.spacing(2,2)},cardSubtitle:{fontSize:14,marginTop:8},pos:{}}}));function re(){var e=ae(),t=i.a.useState({webid:"",projects_list:[],search:"",repositories_hash:{},category_pie:{}}),a=n()(t,2),r=a[0],o=a[1],l=i.a.useRef(r);i.a.useCallback((function(e){l.current=te(te({},l.current),e),o(l.current)}),[o]);return i.a.useEffect((function(){}),[]),i.a.createElement(C.a,{className:"mainContainer",style:{textAlign:"left"}},i.a.createElement(R.a,{variant:"h4",style:{textAlign:"center",marginBottom:"15px"}},"\ud83e\udded Into the Graph"),i.a.createElement(E.a,{elevation:4,className:e.paperPadding},i.a.createElement(R.a,{variant:"body1",style:{textAlign:"center",marginBottom:"20px",marginTop:"15px"}},"Provide the ",i.a.createElement("b",null,"URI to describe"),", and the ",i.a.createElement("b",null,"SPARQL endpoint")," queried in the URL parameters, such as:"),i.a.createElement(R.a,{variant:"h5",style:{textAlign:"center",marginBottom:"20px"}},i.a.createElement(c.b,{to:{pathname:"/describe",search:"?uri=http://bio2rdf.org/clinicaltrials:NCT00209495&endpoint=https://bio2rdf.org/sparql"},className:e.link},"/describe?uri=http://bio2rdf.org/clinicaltrials:NCT00209495&endpoint=https://bio2rdf.org/sparql"))),i.a.createElement(R.a,{variant:"body1",style:{textAlign:"left",marginBottom:"20px"}},i.a.createElement("b",null,"Into the Graph")," provides a simple RDF web browser that just need a SPARQL endpoint URL to resolve URIs, and explore the available linked data."),i.a.createElement(R.a,{variant:"body1",style:{textAlign:"left",marginBottom:"20px"}},"This linked data browser features:",i.a.createElement("br",null),"\ud83d\udd0e A web-based UI to browse any SPARQL endpoints content easily",i.a.createElement("br",null),"\ud83d\udd78\ufe0f Native support for graphs (nquads)",i.a.createElement("br",null),"\ud83c\udfd7\ufe0f Work in progress: visualize and browse concepts using ",i.a.createElement("a",{href:"https://perfectgraph-5c619.web.app",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("code",null,"perfect-graph")),i.a.createElement("br",null),"\ud83d\udea7 Work in progress: insights about the content of the triplestore and its different graphs, using precomputed HCLS descriptives statistics"),i.a.createElement(R.a,{variant:"body1",style:{textAlign:"left"}},"Other relevant libraries:"),i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(R.a,{variant:"body1"},i.a.createElement("a",{href:"https://github.com/micheldumontier/torres-api-platform/",className:e.link,target:"_blank",rel:"noopener noreferrer"},"TORRES API platform")," to store HCLS descriptive metadata for your dataset")),i.a.createElement("li",null,i.a.createElement(R.a,{variant:"body1"},i.a.createElement("a",{href:"https://github.com/MaastrichtU-IDS/fair-metadata",className:e.link,target:"_blank",rel:"noopener noreferrer"},"FAIR metadata")," python lib: to generate HCLS descriptive metadata for your dataset")),i.a.createElement("li",null,i.a.createElement(R.a,{variant:"body1"},i.a.createElement("a",{href:"https://github.com/MaastrichtU-IDS/d2s-project-template/tree/master/datasets/preppi",className:e.link,target:"_blank",rel:"noopener noreferrer"},"Data2Services workflows")," to generate RDF knowledge graphs from structured data using RML (RDF Mapping Language)"))))}var ne=a(243),oe=a(244),ie=a(75),le=a.n(ie),ce=(a(174),Object(g.a)((function(e){return{uriLink:{textDecoration:"none",color:"rgba(0, 0, 0, 0.87)","& :hover":{color:e.palette.primary.main},overflowWrap:"break-word"}}})));function se(e){var t=ce(),a={rdf:"http://www.w3.org/1999/02/22-rdf-syntax-ns#",rdfs:"http://www.w3.org/2000/01/rdf-schema#",owl:"http://www.w3.org/2002/07/owl#",skos:"http://www.w3.org/2004/02/skos/core#",dc:"http://purl.org/dc/elements/1.1/",dct:"http://purl.org/dc/terms/",dctypes:"http://purl.org/dc/dcmitype/",bl:"https://w3id.org/biolink/vocab/",biolink:"http://w3id.org/biolink/vocab/",d2s:"https://w3id.org/d2s/",omop:"http://api.ohdsi.org/WebAPI/vocabulary/concept/",cohd:"https://w3id.org/trek/cohd/",bio2rdf:"http://bio2rdf.org/",dbo:"http://dbpedia.org/ontology/",dbp:"http://dbpedia.org/property/",wd:"http://www.wikidata.org/entity/",wdt:"http://www.wikidata.org/prop/direct/",foaf:"http://xmlns.com/foaf/0.1/",idot:"http://identifiers.org/idot/",dcat:"http://www.w3.org/ns/dcat#",void:"http://rdfs.org/ns/void#","void-ext":"http://ldf.fi/void-ext#",obo:"http://purl.obolibrary.org/obo/",ncit:"http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#",xsd:"http://www.w3.org/2001/XMLSchema#",schema:"http://schema.org/",cito:"http://purl.org/spar/cito/",prov:"http://www.w3.org/ns/prov#",pav:"http://purl.org/pav/",pplan:"http://purl.org/net/p-plan#",np:"http://www.nanopub.org/nschema#",npx:"http://purl.org/nanopub/x/"};return/^(?:node[0-9]+)|((https?|ftp):.*)$/.test(e.uri)?i.a.createElement(c.b,{to:{pathname:"/describe",search:"?uri="+e.uri},className:t.uriLink},i.a.createElement(R.a,{variant:e.variant,className:e.passClass,style:{overflowWrap:"break-word"}},function(e){for(var t in a)if(e.startsWith(a[t]))return e.replace(a[t],t+":");return e}(e.uri))):i.a.createElement(R.a,{variant:e.variant,className:e.passClass,style:{textAlign:"left",overflowWrap:"break-word"}},e.uri)}function pe(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function ue(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?pe(Object(a),!0).forEach((function(t){m()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):pe(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var de=a(95);de.DataTable=a(182);var me=Object(g.a)((function(e){return{link:{textDecoration:"none",textTransform:"none",color:e.palette.primary.main,"&:hover":{color:e.palette.secondary.main,textDecoration:"none"}},fullWidth:{width:"100%"},normalFont:{fontSize:"14px"},smallerFont:{fontSize:"12px"},alignLeft:{textAlign:"left"},paperPadding:{padding:e.spacing(2,2)},paperTitle:{fontWeight:300,marginBottom:e.spacing(1)},loadSpinner:{padding:e.spacing(10,10)}}}));function ge(){var e=me(),t=i.a.useState({describe_uri:"",describe_endpoint:"",describe_results:[],search_results:[],isLoading:!0,requestError:!1}),a=n()(t,2),r=a[0],o=a[1],l=i.a.useRef(r),c=i.a.useCallback((function(e){l.current=ue(ue({},l.current),e),o(l.current)}),[o]),p=Object(s.f)();function u(e){var t;e.startsWith("node")?t="SELECT DISTINCT ?subject ?predicate ?object ?graph WHERE {\n          GRAPH ?graph {\n            "+(e="_:"+e)+" ?predicate ?object .\n          }\n        } LIMIT 1000":t="SELECT DISTINCT ?subject ?predicate ?object ?graph WHERE {\n        {\n          SELECT * {\n            GRAPH ?graph {\n              "+(e="<"+e+">")+" ?predicate ?object .\n              BIND("+e+" AS ?subject)\n            }\n          } LIMIT 1000\n        } UNION {\n          SELECT * {\n            GRAPH ?graph {\n              ?subject ?predicate "+e+" .\n              BIND("+e+" AS ?object)\n            }\n          } LIMIT 1000\n        } UNION {\n          SELECT * {\n            GRAPH ?graph {\n              ?subject "+e+" ?object .\n              BIND("+e+" AS ?predicate)\n            }\n          } LIMIT 1000\n        } UNION {\n          "+("SELECT * {\n        GRAPH "+e+" {\n          ?subject ?predicate ?object .\n          BIND("+e+" AS ?graph)\n        }\n      } LIMIT 1000")+"\n        }\n      }";return encodeURIComponent(t)}return i.a.useEffect((function(){c({describe_results:{}}),c({search_results:{}}),c({isLoading:!0});var e=new URLSearchParams(p.search+p.hash),t=e.get("uri"),a=e.get("endpoint");if(!a){var r=localStorage.getItem("intothegraphSettings");if(r)a=JSON.parse(r).sparql_endpoint}t||(t="http://bio2rdf.org/clinicaltrials:NCT00209495"),a||(a="https://bio2rdf.org/sparql"),c({describe_uri:t}),c({describe_endpoint:a}),/^(?:node[0-9]+)|((https?|ftp):.*)$/.test(t)?(console.log(u(t)),le.a.get(a+"?query="+u(t)).then((function(e){var t=e.data.results.bindings;console.log(t),c({describe_results:t}),c({isLoading:!1}),de("#datatableRef").DataTable()}))):le.a.get(a+"?query="+function(e){var t="";return t=""===e?"SELECT ?foundUri ?foundLabel WHERE {\n        ?foundUri a ?type ; ?p ?foundLabel .\n        VALUES ?p {<http://www.w3.org/2000/01/rdf-schema#label> <https://w3id.org/biolink/vocab/name>} .\n        FILTER(isLiteral(?foundLabel))\n        FILTER(isIRI(?foundUri))\n        } LIMIT 20":'SELECT ?foundUri ?foundLabel WHERE {\n        ?foundUri ?p ?foundLabel .\n        VALUES ?p {<http://www.w3.org/2000/01/rdf-schema#label> <https://w3id.org/biolink/vocab/name>} .\n        FILTER(isLiteral(?foundLabel))\n        FILTER contains(?foundLabel, "$TEXT_TO_SEARCH")\n        } LIMIT 5'.replace("$TEXT_TO_SEARCH",e),encodeURIComponent(t)}(t)).then((function(e){var t=e.data.results.bindings;c({search_results:t}),c({isLoading:!1})})).catch((function(e){console.log(e),c({requestError:!0}),c({isLoading:!1})}))}),[p]),i.a.createElement(C.a,{className:"mainContainer"},i.a.createElement(R.a,{variant:"body2",style:{textAlign:"center",marginBottom:"20px"}},r.describe_endpoint),i.a.createElement(R.a,{variant:"h5",style:{textAlign:"center",marginBottom:"20px"}},r.describe_uri),r.isLoading&&i.a.createElement(ne.a,{className:e.loadSpinner}),r.describe_results.length>0&&i.a.createElement(E.a,{elevation:4,className:e.paperPadding},i.a.createElement("table",{id:"datatableRef"},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null,"Subject"),i.a.createElement("th",null,"Predicate"),i.a.createElement("th",null,"Object"),i.a.createElement("th",null,"Graph"))),i.a.createElement("tbody",null,r.describe_results.map((function(e,t){return i.a.createElement("tr",{key:t},i.a.createElement("td",null,i.a.createElement(se,{variant:"body2",uri:e.subject.value})),i.a.createElement("td",null,i.a.createElement(se,{variant:"body2",uri:e.predicate.value})),i.a.createElement("td",null,i.a.createElement(se,{variant:"body2",uri:e.object.value})),i.a.createElement("td",null,i.a.createElement(se,{variant:"body2",uri:e.graph.value})))}))))),r.search_results.length>0&&i.a.createElement(E.a,{elevation:4,className:e.paperPadding},r.search_results.map((function(t,a){return i.a.createElement(oe.a,{container:!0,spacing:2,alignItems:"center",key:a},i.a.createElement(oe.a,{item:!0,xs:6},i.a.createElement(E.a,{className:e.paperPadding},i.a.createElement(se,{variant:"body2",uri:t.foundUri.value}))),i.a.createElement(oe.a,{item:!0,xs:6},i.a.createElement(R.a,{variant:"body2"},t.foundLabel.value)))}))),r.requestError&&i.a.createElement(E.a,{elevation:2,className:e.paperPadding},i.a.createElement(R.a,{variant:"body2"},"The request to the SPARQL endpoint failed, try to ",i.a.createElement("a",{href:"",className:e.link},"reload the page \u267b\ufe0f"),i.a.createElement("br",null),"Or\xa0",i.a.createElement("a",{href:"https://addons.mozilla.org/fr/firefox/addon/cors-everywhere/",className:e.link,target:"_blank",rel:"noopener noreferrer"},"enable CORS requests")," in your browser.")))}function he(){var e=i.a.useState("https://bio2rdf.org/sparql"),t=n()(e,2),a=t[0],r=t[1],o=Object(p.a)({palette:{primary:{light:"#63a4ff",main:"#1976d2",dark:"#004ba0"},secondary:{light:"#ffa040",main:"#ff6f00",dark:"#c43e00"}},typography:{fontFamily:'"Open Sans", "Roboto", "Arial"',fontWeightLight:300,fontWeightRegular:400,fontWeightMedium:500}});return i.a.createElement(A.Provider,{value:[a,r]},i.a.createElement(u.a,{theme:o},i.a.createElement(c.a,{basename:"/into-the-graph/"},i.a.createElement(l.a,{style:{height:"100%",backgroundColor:"#eceff1"}},i.a.createElement(X,null),i.a.createElement(s.a,{exact:!0,path:"/",component:re}),i.a.createElement(s.a,{path:"/describe",component:ge}),i.a.createElement(Z,null)))))}},138:function(e,t,a){a(139),a(140),e.exports=a(191)},139:function(e,t){"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/into-the-graph/expo-service-worker.js",{scope:"/into-the-graph/"}).then((function(e){})).catch((function(e){console.info("Failed to register service-worker",e)}))}))},151:function(e,t,a){var r=a(84),n=a(152);"string"===typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]]);var o={insert:"head",singleton:!1};r(n,o);e.exports=n.locals||{}},152:function(e,t,a){(t=a(85)(!1)).push([e.i,"@import url(https://fonts.googleapis.com/css?family=Open+Sans);"]),t.push([e.i,'.flexGrow {\n  flex-grow: 1; \n}\n\n.mainContainer {\n  margin-top: 30px;\n  margin-bottom: 20px;\n  text-align: center;\n}\n\n/* a {\n  text-transform: none;\n  text-decoration: none\n} */\n\npre, code {\n  font-family: monospace, monospace;\n  border-radius: 6px;\n  padding: 2px;\n  color: white;\n  background-color: #455a64;\n  /* background-color: #1976d2; */\n}\n  \n/* @import url("https://fonts.googleapis.com/icon?family=Material+Icons");\nbody {\n  margin: 0;\n  padding: 0;\n  text-align: center; } */\n',""]),e.exports=t}},[[138,1,2]]]);
//# sourceMappingURL=app.4a52bdcf.chunk.js.map
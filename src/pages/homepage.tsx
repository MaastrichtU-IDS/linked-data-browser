import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Typography, Container, Box, Button, Chip, Tooltip, Grid, Paper } from "@material-ui/core";
import axios from 'axios';

// Import jquery datatables.net
import 'datatables.net-dt/css/jquery.dataTables.min.css'
const $ = require('jquery');
$.DataTable = require('datatables.net');

import LinkDescribe from '../components/LinkDescribe';
// import { data } from "@solid/query-ldflex";
// import data from "@solid/query-ldflex";

// import { LoggedIn, LoggedOut, Value, useWebId } from '@solid/react';

// import { Like } from '@solid/react';
// import SolidStar from "./SolidStar";

// import {newEngine} from '@comunica/actor-init-sparql';
// import {ActorInitSparql} from '@comunica/actor-init-sparql/lib/ActorInitSparql-browser';
// import {IQueryOptions, newEngineDynamicArged} from "@comunica/actor-init-sparql/lib/QueryDynamic";

const useStyles = makeStyles(theme => ({
  margin: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    // textAlign: 'center',
  },
  paperSearch: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '30%',
  },
  searchInput: {
    marginLeft: theme.spacing(1),
    width: '50%',
    fontSize: '14px',
    flex: 1,
  },
  link: {
    textDecoration: 'none',
    textTransform: 'none',
    color: theme.palette.primary.main,
    '&:hover': {
      color: theme.palette.secondary.main,
      textDecoration: 'none',
    },
  },
  paperPadding: {
    padding: theme.spacing(2, 2),
    margin: theme.spacing(2, 2),
  },
  cardSubtitle: {
    fontSize: 14,
    marginTop: 8,
  },
  pos: {
    // marginBottom: 12,
  },
}))

export default function Homepage() {
  const classes = useStyles();
  const theme = useTheme();
  
  const [state, setState] = React.useState({
    describe_endpoint: '',
    webid: '',
    projects_list: [],
    search: '',
    get_all_graphs_results: [],
    repositories_hash: {},
    category_pie: {}
  });

  const stateRef = React.useRef(state);

  // Avoid conflict when async calls
  // Can be done with another lib (cf. Turgay)
  const updateState = React.useCallback((update) => {
    stateRef.current = {...stateRef.current, ...update};
    setState(stateRef.current);
  }, [setState]);

  // useLocation hook to get SOLID WebID
  // let solid_webid = useWebId();


  // function createEmptyDocument() {
  //   // const location = "/public/into-the-graph/preferences.ttl";
  //   const webId = useWebId();
  //   // console.log("webId!!");
  //   // console.log(webId);
  //   // return data[webId + location].put();
  // }

  // async function WebIdStatus() {
  //   updateState({webid: useWebId()})
  //   // const webId = useWebId();
  //   // .replace("profile/card#me", "public/into-the-graph/preferences.ttl");
  //   // const location = webId.replace("profile/card#me", "public/into-the-graph/preferences.ttl");
  //   // return data[webId + location].put();
  //   return <span>Preferences stored at {webId}.</span>;
  // }

  // TODO: fix to use webid hook
  // async function createEmptyDocument(location: any) {
  //   // webId.replace("profile/card#me", "public/into-the-graph/preferences.ttl");
  //   return data[location].put();
  // }
  

  // componentDidMount
  React.useEffect(() => {
    // console.log('solid_webid');
    // console.log(solid_webid);

    // Check SOLID pod for a user preferences file
    // https://github.com/solid/react-components/blob/master/demo/app.jsx
    // https://solid.github.io/react-components/

    // First get the graphs overview with HCLS metadata
    // if (this.context.triplestore.graphs_overview === "hcls") {
    //   graphsOverviewSparql = this.hclsOverviewQuery
    // } else {
    //   // If "all" usually
    //   graphsOverviewSparql = this.getAllGraphsQuery
    // }
    let describe_endpoint = '';
    // Get sparql_endpoint from cookie intothegraphSettings
    if (!describe_endpoint) {
      const localStorageConfig = localStorage.getItem("intothegraphSettings");
      if (localStorageConfig) {
        let configState: any = JSON.parse(localStorageConfig);
        describe_endpoint = configState.sparql_endpoint;
      }
    }
    if (!describe_endpoint) {
      // If no endpoint found in localStorage
      describe_endpoint = 'https://bio2rdf.org/sparql';
    }
    updateState({ describe_endpoint: describe_endpoint });

    axios.get(describe_endpoint + `?query=` + encodeURIComponent(get_all_graphs_query))
      .then((res: any) => {
        console.log('after get all graphs');
        console.log(res);
        if (res.data.results){
          updateState( { get_all_graphs_results: res.data.results.bindings } );
          // updateState({ graphsLoading: false });
          // $(this.refs.graphsOverview).DataTable();
          $('#datatableAllGraphs').DataTable({
            "autoWidth": false
          });
        }
      })
      .catch((error: any) => {
        console.log(error)
        // updateState({ graphsLoading: false });
        // graphsOverviewTable = ( 
        //   <Typography variant="body2">
        //     Issue querying the SPARQL endpoint 🚫<br/>
        //     This could be due to CORS restrictions of the endpoint.<br/>
        //     You can try installing an add-on to enable CORS in your browser (available for&nbsp;
        //     <a href="https://addons.mozilla.org/fr/firefox/addon/cors-everywhere/" className={classes.link} target='_blank'>
        //       Firefox</a> or&nbsp;
        //       <a href="https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf" className={classes.link} target='_blank'>Chrome</a>).
        //   </Typography>
        // )
      });

    // axios.get(this.context.triplestore.sparql_endpoint + `?query=` + encodeURIComponent(this.entitiesRelationsQuery))
    //   .then(res => {
    //     if (res.data.results){
    //       this.setState( { entitiesRelations: res.data.results.bindings } );
    //       $(this.refs.entitiesRelations).DataTable();
    //     }
    //   });

  }, [])  
  // This useless array needs to be added for React to understand he needs to use the state inside...

  // }, [solid_webid])
  // Trying out the SOLID webId hook

  const get_all_graphs_query = `SELECT DISTINCT ?graph WHERE { GRAPH ?graph {?s ?p ?o} }`;

  const hcls_overview_query = `PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
  PREFIX dct: <http://purl.org/dc/terms/>
  PREFIX dctypes: <http://purl.org/dc/dcmitype/>
  PREFIX dcat: <http://www.w3.org/ns/dcat#>
  PREFIX void: <http://rdfs.org/ns/void#>
  PREFIX dc: <http://purl.org/dc/elements/1.1/>
  PREFIX foaf: <http://xmlns.com/foaf/0.1/>
  SELECT DISTINCT ?graph ?name ?description ?homepage ?dateGenerated ?statements ?entities ?properties ?classes
  WHERE {
    GRAPH ?metadataGraph {
      ?graph a void:Dataset .
      OPTIONAL {
        ?dataset a dctypes:Dataset ;
          dct:title ?name ;
          dct:description ?description ;
          foaf:page ?homepage .
        ?version dct:isVersionOf ?dataset ;
          dcat:distribution ?graph .
      }
      OPTIONAL {
        ?graph void:triples ?statements ;
          void:entities ?entities ;
          void:properties ?properties .
      }
      OPTIONAL {
        ?graph dct:created ?dateGenerated .
      }
      OPTIONAL {
        ?graph void:classPartition [
          void:class rdfs:Class ;
          void:distinctSubjects ?classes
        ] .
      }
    }
  } ORDER BY DESC(?statements)`;

  const entities_relations_query = `PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
  PREFIX dct: <http://purl.org/dc/terms/>
  PREFIX bl: <http://w3id.org/biolink/vocab/>
  PREFIX dctypes: <http://purl.org/dc/dcmitype/>
  PREFIX idot: <http://identifiers.org/idot/>
  PREFIX dcat: <http://www.w3.org/ns/dcat#>
  PREFIX void: <http://rdfs.org/ns/void#>
  PREFIX dc: <http://purl.org/dc/elements/1.1/>
  PREFIX foaf: <http://xmlns.com/foaf/0.1/>
  PREFIX void-ext: <http://ldf.fi/void-ext#>
  SELECT DISTINCT ?graph ?classCount1 ?class1 ?relationWith ?classCount2 ?class2
  WHERE {
  GRAPH ?metadataGraph {
    ?graph a void:Dataset .
    ?graph void:propertyPartition [
      void:property ?relationWith ;
      void:classPartition [
        void:class ?class1 ;
        void:distinctSubjects ?classCount1 ;
      ];
      void-ext:objectClassPartition [
      void:class ?class2 ;
      void:distinctObjects ?classCount2 ;
      ]] .
    }
  } ORDER BY DESC(?classCount1)`;

  return(
    <Container className='mainContainer'>
      <Typography variant="h4" className={classes.margin} style={{marginBottom: theme.spacing(4) }}>
        🧭 Into the Graph
        {/* <img src={idsLogo} style={{maxWidth: '200px'}} alt="IDS Logo" /> */}
      </Typography>

      <Paper elevation={4} className={classes.paperPadding}>
        <Typography variant="body1" className={classes.margin}>
          Provide the <b>URI to describe</b>, and the <b>SPARQL endpoint</b> queried in the URL parameters, such as:
        </Typography>

        <Typography variant="h5" className={classes.margin}>
          <Link to={{
            pathname: '/describe',
            search: '?uri=http://bio2rdf.org/clinicaltrials:NCT00209495&endpoint=https://bio2rdf.org/sparql',
          }} className={classes.link}>
            /describe?uri=http://bio2rdf.org/clinicaltrials:NCT00209495&endpoint=https://bio2rdf.org/sparql
          </Link>
        </Typography>
      </Paper>

      <Typography variant="body1" className={classes.margin} style={{textAlign: 'left', marginTop: theme.spacing(5) }}>
        <b>Into the Graph</b> provides a simple RDF web browser that just need a SPARQL endpoint URL to resolve URIs, and explore the available linked data.
      </Typography>
      
      <Typography variant="body1" className={classes.margin} style={{ textAlign: 'left' }}>
        This linked data browser features:
        <br/>🔎 A web-based UI to browse any SPARQL endpoints content easily
        <br/>🕸️ Native support for graphs (nquads)
        <br/>🏗️ Work in progress: visualize and browse concepts using <a href='https://perfectgraph-5c619.web.app' target='_blank' rel="noopener noreferrer"><code>perfect-graph</code></a>
        <br/>🚧 Work in progress: insights about the content of the triplestore and its different graphs, using precomputed HCLS descriptives statistics
      </Typography>


      <Typography variant="body1" className={classes.margin} style={{textAlign: 'left'}}>
        Other relevant libraries:
      </Typography>
      <ul style={{textAlign: 'left'}}>
        <li><Typography variant="body1">
          <a href='https://github.com/micheldumontier/torres-api-platform/' className={classes.link} target='_blank' rel="noopener noreferrer">TORRES API platform</a> to store HCLS descriptive metadata for your dataset
        </Typography></li>
        <li><Typography variant="body1">
          <a href='https://github.com/MaastrichtU-IDS/fair-metadata' className={classes.link} target='_blank' rel="noopener noreferrer">FAIR metadata</a> python lib: to generate HCLS descriptive metadata for your dataset
        </Typography></li>
        <li><Typography variant="body1">
          <a href='https://github.com/MaastrichtU-IDS/d2s-project-template/tree/master/datasets/preppi' className={classes.link} target='_blank' rel="noopener noreferrer">Data2Services workflows</a> to generate RDF knowledge graphs from structured data using RML (RDF Mapping Language)
        </Typography></li>
      </ul>

      {/* Display a datatable with subject, predicate, object, graph retrieved */}
      {Object.keys(state.get_all_graphs_results).length > 0 && (<>
        <Typography variant="h5" className={classes.margin} style={{ marginTop: theme.spacing(6) }}>
          {state.describe_endpoint} graphs overview
        </Typography>
        <Paper elevation={4} className={classes.paperPadding}>
          <table id='datatableAllGraphs' style={{ wordBreak: 'break-all' }}>
            <thead>
              <tr>
                <th>Graph</th>
                {/* <th># of triples</th> */}
                {/* <th>Date generated</th>
                <th># of entities</th>
                <th># of properties</th>
                <th># of classes</th> */}
              </tr>
            </thead>
            <tbody>
              {/* Iterate Describe query results array */}
              {/* {state.get_all_graphs_results.map((row: any, key: number) => { */}
              {/* {Object.keys(state.get_all_graphs_results).map(function(row: any, key: number){  */}
              {state.get_all_graphs_results.map((row: any, key: number) => {
                // return <Tooltip title={displayDescription(row.name, row.description)} key={key}>
                return <tr key={key}>
                    {/* <td><LinkDescribe uri={row.graph.value} variant='body2'/></td> */}
                    <td><LinkDescribe variant='body2' uri={row.graph.value}/></td>
                    {/* <td><LinkDescribe variant='body2' uri={row.statements.value}/></td> */}
                    {/* <td><LinkDescribe variant='body2' uri={row.object.value}/></td>
                    <td><LinkDescribe variant='body2' uri={row.graph.value}/></td> */}
                  </tr>
                {/* </Tooltip>; */}
              })}
            </tbody>
          </table>
        </Paper>
        </>)}

      {/* <LoggedIn>
        <Typography style={{textAlign: 'center', marginBottom: '20px'}}>
          Welcome <Value src="user.name"/>!
        </Typography>
        <Typography style={{textAlign: 'center', marginBottom: '20px'}}>
          Soon you will be able to use your SOLID account! 
        </Typography>
      </LoggedIn>
      <LoggedOut>
        <Typography style={{textAlign: 'center', marginBottom: '20px'}}>
          Welcome
        </Typography>
      </LoggedOut> */}

    </Container>
  )

}


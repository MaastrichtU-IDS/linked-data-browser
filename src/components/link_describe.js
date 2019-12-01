import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  uriLink: {
    textDecoration: 'none',
    color: 'rgba(0, 0, 0, 0.87)',
    '& :hover': {
      color: theme.palette.primary.main,
    },
    overflowWrap: 'break-word'
  }
}));

// Format a link to be displayedby shortening URI
export function LinkDescribe(props) {
  const classes = useStyles();

  // TODO: use centralized service (prefixcommons/prefix.cc?)
  const prefixRegistry = {
    bl: 'https://w3id.org/biolink/vocab/',
    biolink: 'http://w3id.org/biolink/vocab/',
    bio2rdf: 'http://bio2rdf.org/',
    d2s: 'https://w3id.org/d2s/',
    rdf: 'http://www.w3.org/1999/02/22-rdf-syntax-ns#',
    rdfs: 'http://www.w3.org/2000/01/rdf-schema#',
    dc: 'http://purl.org/dc/elements/1.1/',
    obo: 'http://purl.obolibrary.org/obo/',
    owl: 'http://www.w3.org/2002/07/owl#',
    ido: 'https://identifiers.org/'
  };

  function shortenUri(uriToShorten) {
    for (const prefix in prefixRegistry) {
      if (uriToShorten.startsWith(prefixRegistry[prefix])) {
        return uriToShorten.replace(prefixRegistry[prefix], prefix + ':');
      }
    }
    return uriToShorten;
  }

  if (props.uri.startsWith('http://') || props.uri.startsWith('https://')) {
    // Process URIs
    return (
      <a href={'/describe?uri=' + props.uri} className={classes.uriLink}>
        <Typography variant={props.variant} className={props.passClass}
        style={{overflowWrap: 'break-word'}}>
          {shortenUri(props.uri)}
        </Typography>
      </a>
    )
  }
  return (
    // For non URI
    <Typography variant={props.variant} className={props.passClass} 
    style={{textAlign: 'left', overflowWrap: 'break-word'}}>
      {props.uri}
    </Typography>
  )
}
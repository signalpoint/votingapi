/**
 *
 */
function votingapi_select_votes(options) {
  try {
    options.method = 'POST';
    options.path = 'votingapi/select_votes.json';
    options.service = 'votingapi';
    options.resource = 'select_votes';
    Drupal.services.call(options);
  }
  catch (error) { console.log('votingapi_select_votes - ' + error); }
}

/**
 * The set_votes service resource.
 *   options.data.votes.entity_type  (Optional, defaults to 'node')
 *   options.data.votes.entity_id    (Required)
 *   options.data.votes.value_type    (Optional, defaults to 'percent')
 *   options.data.votes.value         (Required)
 *   options.data.votes.tag           (Optional, defaults to 'vote')
 *   options.data.votes.uid           (Optional, defaults to current user)
 *   options.data.votes.vote_source   (Optional, defaults to current IP)
 *   options.data.votes.timestamp     (Optional, defaults to REQUEST_TIME)
 */
function votingapi_set_votes(options) {
  try {
    options.method = 'POST';
    options.path = 'votingapi/set_votes.json';
    options.service = 'votingapi';
    options.resource = 'set_votes';
    if (typeof options.data === 'object') { options.data = JSON.stringify(options.data); }
    Drupal.services.call(options);
  }
  catch (error) { console.log('votingapi_set_votes - ' + error); }
}


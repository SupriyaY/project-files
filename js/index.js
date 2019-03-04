//Config
var applicationID = 'JE61NV9M0M';
var apiKey = '85b9834d56f52ace03bdeb7e1293181c';
var indexName = 'restaurants';

var client = algoliasearch(applicationID, apiKey);
var helper = algoliasearchHelper(client, indexName);

//
helper.on('result', function(content) {
  renderHits(content);
});


//json response, all of the restaurannts
// function renderHits(content) {
//   $('#container').html(JSON.stringify(content, null, 2));
// }

//display the name of each product
function renderHits(content){
$('#container').html(function(){
 return $.map(content.hits, function(hit) {
    return '<li>' + hit._highlightResult.name.value + '<li>';
 });
});
}

$('#search-box').on('keyup', function() {
 helper.setQuery($(this).val())
    .search();
});


//


//trigger the algolia search
helper.search();


import { Entry } from './journal';
import './styles.css';

$(document).ready(function() {
  $('#journalForm').submit(function(event) {
    event.preventDefault();
    let userTitle = $('#title').val();
    let userBody = $('#body').val();
    let entry = new Entry(userTitle, userBody);
    let wordCount = entry.wordCount();
    let vowelCount = entry.vowelCount();
    let consonantCount = entry.consonantCount();
    let sentence = entry.getTeaser();
    $('#solution').append("<li> Word Count: " + wordCount + " </li>");
    $('#solution').append("<li> Vowel Count: " + vowelCount + " </li>");
    $('#solution').append("<li> Consonant Count: " + consonantCount + " </li>")
    $('#solution').append("<li> Teaser: " + sentence + " </li>")
  });
});
import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

@inject(HttpClient)
export class Search {
  searchTerm = 'aurelia';
  repos = [];

  constructor(http) {
    http.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl('https://api.github.com');
    });

    this.http = http;
  }

  // activate() {
  //   return this.http.fetch('users')
  //     .then(response => response.json())
  //     .then(users => this.users = users);
  // }

  findRepos() {
    $('#results').hide();
    let url = `/search/repositories?q=${this.searchTerm}+language:javascript&sort=stars&order`;
    return this.http.fetch(url)
      .then(response => response.json())
      .then(repos => this.repos = repos.items)
      .then(() => $('#results').fadeIn());
  }
}

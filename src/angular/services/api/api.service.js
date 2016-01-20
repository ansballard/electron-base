ApiService.$inject = ["$http"];

export default ApiService;

function ApiService($http) {
  return {
    getCommits() {
      return $http.get("https://api.github.com/repos/ansballard/electron-base/commits")
        .then((response) => response.data
          .map((commit) => commit.url)
        );
      ;
    }
  }
}

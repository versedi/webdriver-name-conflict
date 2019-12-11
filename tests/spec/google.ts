import GooglePage from '../page/GooglePage';

describe('Google', function (){
    it('Customer can search', () => {
        browser.open('https://google.com');
        GooglePage.searchInput.setValue('test');
    });
});
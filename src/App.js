import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import notFound from './components/NotFound/NotFound';
import Movie from './components/Movie/Movie';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faFilm, faClock, faMoneyBill, faTicketAlt } from '@fortawesome/free-solid-svg-icons'

library.add(faSearch, faFilm, faClock, faMoneyBill, faTicketAlt);

const App = () => {
    return (
        <BrowserRouter>
            <React.Fragment>
                <Header />
                <Switch>
                    <Route path='/' component={Home} exact/>
                    <Route path='/:movieId' component={Movie} exact/>
                    <Route component={notFound} />
                </Switch>
            </React.Fragment>
        </BrowserRouter>
    );
}

export default App;
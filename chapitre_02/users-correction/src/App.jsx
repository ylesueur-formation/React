import React from 'react';
import UTILISATEURS from './assets/users.json';
import { UserInfo } from './components/UserInfo';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        // console.log(UTILISATEURS);
    }

    // createUserInfos() {
    //     let infos = [];
    //     for (let i = 0; i <= UTILISATEURS.length; i++) {
    //         let utilisateur = UTILISATEURS[i];
    //         let userInfo = <UserInfo name={utilisateur.name} email={utilisateur.email} website={utilisateur.website} />
    //         infos.push(userInfo);
    //     }
    //     return infos;
    // }

    render() {
        return (
            <>
                {
                    UTILISATEURS.map((utilisateur) => { 
                        // console.log("Utilisateur: ", utilisateur);
                        return <UserInfo key={utilisateur.id} name={utilisateur.name} email={utilisateur.email} website={utilisateur.website} />
                    })
                }
                {/* {
                    this.createUserInfos()
                } */}
            </>
        );
    }
}
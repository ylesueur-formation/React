// import {  TimerHook } from './components/02-etats/Timer';
// import { Personnage, PersonnageAvecProps, Personne } from './components/01-composant/Personne';
// import { Event, EventClasse } from './components/03-events/Event';
// import { Reference } from './components/04-references/Ref';
// import { Desctructuration } from './components/05-destructuration/Destructuration';
import { Liste } from './components/06-liste/Liste';

export default function App() {
  return (
      // Le JSX ne doit avoir qu'une seule balise racine
      <div>
          {/* <p>Global</p>
          <h1>Bonjour, monde !</h1>
          <ul>
              <li>Exemple</li>
              <li id="salut" class="salut">Salut</li>
          </ul>
          <Personne name="Jean" salut="toto"/>
          <br/>
          <Personne name="Ella" salut="tata"/>
          <Personnage />
          <PersonnageAvecProps name="toto" /> */}
          {/* <Timer />
          <TimerState /> */}
          {/* <h2>Timer avec Hook</h2>
          <TimerHook /> */}
          {/* <EventClasse /> */}
          {/* <h2>Event avec Hook</h2> */}
          {/* <Event/> */}
          {/* <Reference/>
          <Desctructuration/> */}
          <Liste />
      </div>
  )
}
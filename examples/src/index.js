import React from 'react';
import { render } from 'react-dom';
import PDFsimulator from '../../src/index';
import { CustomisationButtons } from './CustomisationButtons';
import { CustomisationViewpoint } from './CustomisationViewpoint';

const App = () => (
    <PDFsimulator
    customisationButtons={CustomisationButtons}
    customisationViewpoint={CustomisationViewpoint}
    >
        <div>
            <h1 style={{ color:'red' }}>¡¡Hola Mundo!!</h1>
            <h2>Coloca todo tu codigo HTML o JSX aquí</h2>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit sed voluptates iste! Excepturi optio voluptatem deserunt, cupiditate facilis qui sequi dicta sapiente at laudantium eos, voluptate maiores voluptates cumque ipsam?
                Facilis placeat voluptas dicta quia maiores labore, blanditiis saepe, in culpa doloremque dignissimos quis aspernatur beatae quod quibusdam explicabo molestias omnis recusandae laudantium, animi aperiam! Dolorum quia neque ab enim?
                Quasi consequatur eaque cumque aspernatur in sunt harum laudantium dolores error recusandae, rem est, cupiditate ipsa hic consectetur ipsam similique incidunt quidem doloribus ab? Iure odio voluptatibus ipsa facere adipisci?
            </p>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit sed voluptates iste! Excepturi optio voluptatem deserunt, cupiditate facilis qui sequi dicta sapiente at laudantium eos, voluptate maiores voluptates cumque ipsam?
                Facilis placeat voluptas dicta quia maiores labore, blanditiis saepe, in culpa doloremque dignissimos quis aspernatur beatae quod quibusdam explicabo molestias omnis recusandae laudantium, animi aperiam! Dolorum quia neque ab enim?
                Quasi consequatur eaque cumque aspernatur in sunt harum laudantium dolores error recusandae, rem est, cupiditate ipsa hic consectetur ipsam similique incidunt quidem doloribus ab? Iure odio voluptatibus ipsa facere adipisci?
            </p>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit sed voluptates iste! Excepturi optio voluptatem deserunt, cupiditate facilis qui sequi dicta sapiente at laudantium eos, voluptate maiores voluptates cumque ipsam?
                Facilis placeat voluptas dicta quia maiores labore, blanditiis saepe, in culpa doloremque dignissimos quis aspernatur beatae quod quibusdam explicabo molestias omnis recusandae laudantium, animi aperiam! Dolorum quia neque ab enim?
                Quasi consequatur eaque cumque aspernatur in sunt harum laudantium dolores error recusandae, rem est, cupiditate ipsa hic consectetur ipsam similique incidunt quidem doloribus ab? Iure odio voluptatibus ipsa facere adipisci?
            </p>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit sed voluptates iste! Excepturi optio voluptatem deserunt, cupiditate facilis qui sequi dicta sapiente at laudantium eos, voluptate maiores voluptates cumque ipsam?
                Facilis placeat voluptas dicta quia maiores labore, blanditiis saepe, in culpa doloremque dignissimos quis aspernatur beatae quod quibusdam explicabo molestias omnis recusandae laudantium, animi aperiam! Dolorum quia neque ab enim?
                Quasi consequatur eaque cumque aspernatur in sunt harum laudantium dolores error recusandae, rem est, cupiditate ipsa hic consectetur ipsam similique incidunt quidem doloribus ab? Iure odio voluptatibus ipsa facere adipisci?
            </p>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit sed voluptates iste! Excepturi optio voluptatem deserunt, cupiditate facilis qui sequi dicta sapiente at laudantium eos, voluptate maiores voluptates cumque ipsam?
                Facilis placeat voluptas dicta quia maiores labore, blanditiis saepe, in culpa doloremque dignissimos quis aspernatur beatae quod quibusdam explicabo molestias omnis recusandae laudantium, animi aperiam! Dolorum quia neque ab enim?
                Quasi consequatur eaque cumque aspernatur in sunt harum laudantium dolores error recusandae, rem est, cupiditate ipsa hic consectetur ipsam similique incidunt quidem doloribus ab? Iure odio voluptatibus ipsa facere adipisci?
            </p>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit sed voluptates iste! Excepturi optio voluptatem deserunt, cupiditate facilis qui sequi dicta sapiente at laudantium eos, voluptate maiores voluptates cumque ipsam?
           </p>
        </div>
    </PDFsimulator>
);
render(<App />, document.getElementById('root'));

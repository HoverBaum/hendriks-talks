import talks from './talks.js'
import {html, render} from 'https://unpkg.com/lit-html?module'

const talksTemplate = talks => html`${talks.map(talk => html`
  <section class="card card_1">
    <hgroup>
      <h2>${talk.title}</h2>
      <small>${talk.subtitle}</small>
    </hgroup>
    <p>${talk.description}</p>
    <ul>
      ${talk.links.map(link => html`
        <li><a target="_blank" href="${link.href}">${link.text}</a></li>
      `)}
    </ul>
  </section>
`)}`

render(talksTemplate(talks), document.querySelector('#talks'));
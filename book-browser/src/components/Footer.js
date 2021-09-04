import React from 'react';

import './styles/Footer.css'

export default function Footer() {
    return (
        <section className="Footer__container">
            <div className="Footer-item">
                <i className="Footer-item-icon fab fa-github"></i>
                <a
                 className="Footer-item-text"
                 href="https://github.com/AndresNunezG/BookBrowser-SubstringCounter"
                >
                &nbsp;Visit the code
                </a>
            </div>
            <div className="Footer-item">
                <i className="Footer-item-icon fas fa-server"></i>
                <a
                 className="Footer-item-text"
                 href="https://fontawesome.com/"
                >
                &nbsp;API OpenLibrary
                </a>
            </div>
            <div className="Footer-item">
                <i className="Footer-item-icon fas fa-info"></i>
                <a
                 className="Footer-item-text"
                 href="https://openlibrary.org/developers/api"
                >
                &nbsp;Icons by Fontawesome
                </a>
            </div>
        </section>
    )
}
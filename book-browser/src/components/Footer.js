import React from 'react';
import '../assets/styles/Footer.css';

export default function Footer() {
    /**
     * Stateless presentational component to attribute copyright
    */
    return (
        <section className="Footer__container">
            <div className="Footer-item">
                <i className="Footer-item-icon fab fa-github"></i>
                <a
                 className="Footer-item-text"
                 href="https://github.com/AndresNunezG/BookBrowser-SubstringCounter"
                 target="_blank"
                 rel="noreferrer"
                >
                &nbsp;Visit the code
                </a>
            </div>
            <div className="Footer-item">
                <i className="Footer-item-icon fas fa-server"></i>
                <a
                 className="Footer-item-text"
                 href="https://openlibrary.org/developers/api"
                 target="_blank"
                 rel="noreferrer"
                >
                &nbsp;API OpenLibrary
                </a>
            </div>
            <div className="Footer-item">
                <i className="Footer-item-icon fas fa-info"></i>
                <a
                 className="Footer-item-text"
                 href="https://fontawesome.com/"
                 target="_blank"
                 rel="noreferrer"
                >
                &nbsp;Icons by Fontawesome
                </a>
            </div>
            <div className="Footer-item">
                <i className="Footer-item-icon fas fa-image"></i>
                <a
                 className="Footer-item-text"
                 href="https://www.manypixels.co/gallery"
                 target="_blank"
                 rel="noreferrer"
                >
                &nbsp;Images by ManyPixels
                </a>
            </div>
        </section>
    )
}
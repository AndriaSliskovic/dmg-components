import { h } from '@stencil/core';
import { Component } from '@stencil/core';

@Component({
    tag: 'dmg-back-btn',
    styleUrl: './dmg-back-btn.css',
    shadow: true
})

export class DmgButton {

    render() {
        return (
            <button>
                BACK
            </button>
        );
    }
}
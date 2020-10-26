import { h } from '@stencil/core';
import { Component } from '@stencil/core';

@Component({
    tag: 'dmg-button',
    styleUrl: './dmg-button.css',
    shadow: true
})

export class DmgButton {

    render() {
        return (
            <button class="dmgButton" ><slot/></button>
        );
    }
}
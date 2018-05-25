import {Component, OnInit} from '@angular/core';
import {Slide} from './slide';

declare var DG: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'app';
    slides = [new Slide('../assets/slider-img-1.jpg'),
        new Slide('../assets/slider-img-2.jpg')];
    activeModal: string = null;


    closeModal() {
        this.activeModal = null;
    }

    showModal(name: string) {
        this.activeModal = name;
    }

    isModalActive(name: string): boolean {
        return this.activeModal === name;
    }

    ngOnInit(): void {
        this.loadSlide();
        this.activateSlider();
        this.loadMap();
    }

    private loadMap() {
        DG.then(function () {
            const map = DG.map('map', {
                center: [54.98, 82.89],
                zoom: 13,
                fullscreenControl: false,
                zoomControl: false
            });
            DG.marker([54.98, 82.89]).addTo(map).bindPopup('I am a popup!');
        });
    }

    private loadSlide() {
        // TODO
    }

    private activateSlider() {
        this.slides[0].visible = true;
    }

    prevSlide() {
        const n = this.slides.length;
        for (let i = 0; i < n; ++i) {
            if (this.slides[i].visible) {
                this.slides[i].visible = false;
                this.slides[(i + n - 1) % n].visible = true;
                return;
            }
        }
    }

    nextSlide() {
        const n = this.slides.length;
        for (let i = 0; i < n; ++i) {
            if (this.slides[i].visible) {
                this.slides[i].visible = false;
                this.slides[(i + 1) % n].visible = true;
                return;
            }
        }
    }

    changeSlideTo(index: number) {
        this.slides.forEach(value => value.visible = false);
        this.slides[index].visible = true;
    }

    get currentDate() {
        return (new Date()).getFullYear();
    }
}


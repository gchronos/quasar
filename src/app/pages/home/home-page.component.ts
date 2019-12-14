import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatCheckboxChange } from '@angular/material';


interface AudioItem {
    el: HTMLAudioElement;
    isSelected: boolean;
    src: string;
}


@Component({
    selector: 'quasar-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, AfterViewInit {
    @ViewChild('audiosEl', {static: false}) audiosEl: ElementRef;
    audio: AudioItem[] = [
        {
            el: null,
            isSelected: true,
            src: 'https://www.hoerspielbox.de/wp-content/blogs.dir/sites/1/4-1-10006.mp3?_=1'
        },
        {
            el: null,
            isSelected: true,
            src: 'https://www.hoerspielbox.de/wp-content/blogs.dir/sites/1/4-1-10007.mp3?_=2'
        },
        {
            el: null,
            isSelected: true,
            src: 'https://www.hoerspielbox.de/wp-content/blogs.dir/sites/1/4-1-10008.mp3?_=3'
        }
    ];

    constructor() {
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        if (this.audiosEl.nativeElement.children) {
            let i = 0;
            for (const item of this.audiosEl.nativeElement.children) {
                this.audio[i].el = item.getElementsByTagName('audio')[0];
                i++;
            }
        }
    }

    onPlaySelected(): void {
        this.audio.forEach((audioEl: AudioItem) => {
            if (audioEl.isSelected && audioEl.el) {
                audioEl.el.play();
            }
        });
    }

    onPauseSelected(): void {
        this.audio.forEach((audioEl: AudioItem) => {
            if (audioEl.isSelected && audioEl.el) {
                audioEl.el.pause();
            }
        });
    }

    onStopSelected(): void {
        this.audio.forEach((audioEl: AudioItem) => {
            if (audioEl.isSelected && audioEl.el) {
                audioEl.el.pause();
                audioEl.el.currentTime = 0;
            }
        });
    }

    onToggleSelected($event: MatCheckboxChange): void {
        this.audio.forEach((audioEl: AudioItem) => {
            audioEl.isSelected = $event.checked;
        });
    }
}

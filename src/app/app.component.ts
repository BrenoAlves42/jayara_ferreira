import { Component, inject, HostListener, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'jayara_ferreira';
  buttonClass = 'text-white text-xl font-bold px-4 rounded transition transform duration-150 ease-in-out hover:scale-105 hover:text-violet-300';
  buttonClass2 = 'btn-2';
  rawUrl = 'https://open.spotify.com/embed/album/78RBzAjLyX6gyG69braTCJ?utm_source=generator&theme=0'; 
  safeUrl: SafeResourceUrl;
  mobileMenuOpen = false;

  constructor(private sanitizer: DomSanitizer) {
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.rawUrl);
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  mobileScroll(id: string): void {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    this.mobileMenuOpen = false;
  }

  ngOnInit(): void {
    this.setBodyHeightToBackground();
  }

  @HostListener('window:resize')
  onWindowResize(): void {
    this.setBodyHeightToBackground();
  }

  private setBodyHeightToBackground(): void {
    try {
      const img = new Image();
      img.src = '/bg2.png';
      img.onload = () => {
        const scale = window.innerWidth / img.width;
        const scaledHeight = Math.ceil(img.height * scale);
        // Set both html and body height so the page can scroll to the full image
        document.documentElement.style.height = scaledHeight + 'px';
        document.body.style.height = scaledHeight + 'px';
      };
    } catch (e) {
      // fail silently if DOM unavailable or image missing
    }
  }

  openInstagram(){
    window.open('https://www.instagram.com/jayara_ferreira_/', '_blank', 'noopener, noreferrer');
    
  }
  openSpotify(){
    window.open('https://open.spotify.com/intl-pt/artist/1BxlPhaY4lA5MMJxJ2eHCy?si=9ZH6lztjRt6UAdqbI9-bmw', '_blank', 'noopener, noreferrer');
  }
  openYoutube(){
    window.open('https://www.youtube.com/@jayara_ferreira', '_blank', 'noopener, noreferrer');
  }
  openTiktok(){
    window.open('https://www.tiktok.com/@jayara_ferreira', '_blank', 'noopener, noreferrer');
  }
  openLinkTree(){
    var link = 'https://onerpm.link/424106031727?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGn_JB2Ksv84TRIPy9Dvs--Gp9YpElEhqeI3isIxaZQiHLJih6nkGQb9jAdVgM_aem_TWyld7_6vxuQf9oSYbL3aQ'
    window.open(link, '_blank', 'noopener, noreferrer');
  }

  scrollToSection(element: HTMLElement): void {
  element.scrollIntoView({
    behavior: 'smooth',
    block: 'center'
  });
}


}

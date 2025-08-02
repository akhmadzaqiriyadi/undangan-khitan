# Fitur Swipe Navigation

## Deskripsi
Aplikasi ini sekarang dilengkapi dengan fitur navigasi swipe yang memungkinkan pengguna untuk berpindah antar halaman dengan mudah menggunakan gesture swipe atau navigasi otomatis.

## Fitur Utama

### 1. Swipe Navigation
- **Swipe Kanan**: Navigasi ke halaman sebelumnya
- **Swipe Kiri**: Navigasi ke halaman berikutnya
- Visual feedback berupa ikon panah saat melakukan swipe

### 2. Auto Navigation
- Otomatis berpindah ke halaman berikutnya setiap 15 detik
- Countdown timer menampilkan sisa waktu hingga navigasi berikutnya
- Dapat di-pause/resume menggunakan tombol toggle

### 3. Keyboard Navigation (Desktop)
- **Arrow Left**: Halaman sebelumnya
- **Arrow Right**: Halaman berikutnya  
- **Space**: Toggle auto navigation

### 4. Visual Indicators
- Page indicator dots di bawah halaman
- Countdown timer di samping tombol pause/play
- Swipe feedback dengan ikon panah

## Komponen

### SwipeNavigator.tsx
Komponen utama yang menangani:
- Touch gesture detection
- Auto navigation timer
- Keyboard shortcuts
- Visual feedback

### Layout Modifications
- Wrapper SwipeNavigator ditambahkan ke layout utama
- Posisi tombol audio player disesuaikan untuk mengakomodasi tombol auto-navigation

## Route List
1. `/` - Opening
2. `/profil` - Profil
3. `/event` - Event
4. `/maps` - Maps
5. `/gift` - Gift
6. `/gallery` - Gallery
7. `/thanks` - Thanks

## Konfigurasi
- Auto navigation interval: 15 detik
- Minimum swipe distance: 50px
- Swipe direction detection berdasarkan horizontal vs vertical movement

## UI Controls
- **Audio Player**: Pojok kanan atas
- **Auto Navigation Toggle**: Pojok kanan bawah (dengan countdown)
- **Page Indicators**: Tengah bawah
- **Bottom Navbar**: Bawah halaman

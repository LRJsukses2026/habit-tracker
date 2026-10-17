// Pengaturan aplikasi Jejak Harian.
// Isi dua baris pertama setelah project Supabase dibuat (lihat PANDUAN.md).
window.JEJAK_CONFIG = {
  SUPABASE_URL: 'ISI_URL_PROJECT_SUPABASE',
  SUPABASE_ANON_KEY: 'ISI_KUNCI_PUBLIK_SUPABASE',

  // Boleh diubah sesuai kebutuhan
  INCOME_SOURCES: ['Gaji', 'Usaha', 'Freelance', 'Investasi', 'Lainnya'],
  EXPENSE_CATEGORIES: ['Makan', 'Transport', 'Tagihan', 'Belanja', 'Hiburan', 'Tabungan', 'Lainnya'],
  ACTIVITY_CATEGORIES: ['Belajar', 'Kerja', 'Olahraga', 'Ibadah', 'Lainnya'],
  WALLETS: ['Tunai', 'Rekening bank', 'E-wallet'],
  STUDY_TARGET_MIN: 480,   // target waktu belajar per minggu (menit)
  MAX_FILE_MB: 50          // batas ukuran satu e-book (MB)
};

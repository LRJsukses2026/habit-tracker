// Pengaturan aplikasi Jejak Harian.
// Isi dua baris pertama setelah project Supabase dibuat (lihat PANDUAN.md).
window.JEJAK_CONFIG = {
  SUPABASE_URL: 'https://qiqgxwyfefwolubatmjq.supabase.co',
  SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFpcWd4d3lmZWZ3b2x1YmF0bWpxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTIyMTQxMTksImV4cCI6MjEwNzc5MDExOX0.W8YjdVQ0TMSDYY8QxAwyFVgR0SUhW0hH1qAlvYawp6o',

  // Boleh diubah sesuai kebutuhan
  INCOME_SOURCES: ['Gaji', 'Usaha', 'Freelance', 'Investasi', 'Lainnya'],
  EXPENSE_CATEGORIES: ['Makan', 'Transport', 'Tagihan', 'Belanja', 'Hiburan', 'Tabungan', 'Lainnya'],
  ACTIVITY_CATEGORIES: ['Belajar', 'Kerja', 'Olahraga', 'Ibadah', 'Lainnya'],
  WALLETS: ['Tunai', 'Rekening bank', 'E-wallet'],
  STUDY_TARGET_MIN: 480,   // target waktu belajar per minggu (menit)
  MAX_FILE_MB: 50          // batas ukuran satu e-book (MB)
};

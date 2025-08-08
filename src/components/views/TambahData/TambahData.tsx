export default function TambahData() {
  return (
    <div>
      <div className="max-w-4xl mx-auto p-8 bg-white rounded shadow-lg">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-1 text-sm font-medium">NIK</label>
            <input
              type="text"
              placeholder="12345xxxx"
              className="w-full rounded-md border border-gray-300 bg-gray-100 px-4 py-2"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Nama Jalan</label>
            <input
              type="text"
              placeholder="Nama Jalan"
              className="w-full rounded-md border border-gray-300 bg-gray-100 px-4 py-2"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Nama</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full rounded-md border border-gray-300 bg-gray-100 px-4 py-2"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">
              Jenis Bantuan
            </label>
            <select className="w-full rounded-md border border-gray-300 bg-gray-100 px-4 py-2">
              <option value="">Pilih Jenis Bantuan</option>
              <option value="sembako">Kesehatan</option>
              <option value="uang">Pendidikan</option>
              <option value="uang">Sosial</option>
              <option value="uang">Dakwah</option>
              <option value="uang">Ekonomi</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">
              Nomor Telepon
            </label>
            <input
              type="text"
              placeholder="08123xxx"
              className="w-full rounded-md border border-gray-300 bg-gray-100 px-4 py-2"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">
              Jumlah Bantuan
            </label>
            <input
              type="text"
              placeholder="Jumlah Bantuan"
              className="w-full rounded-md border border-gray-300 bg-gray-100 px-4 py-2"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">
              Kota/Kabupaten
            </label>
            <select className="w-full rounded-md border border-gray-300 bg-gray-100 px-4 py-2">
              <option value="">Pilih Kota/Kabupaten</option>
              <option value="pekanbaru">Pekanbaru</option>
              <option value="dumai">Dumai</option>
              <option value="bengkalis">Kabupaten Bengkalis</option>
              <option value="indragiri-hilir">Kabupaten Indragiri Hilir</option>
              <option value="indragiri-hulu">Kabupaten Indragiri Hulu</option>
              <option value="kampar">Kabupaten Kampar</option>
              <option value="kuantan-singingi">Kabupaten Kuantan Singingi</option>
              <option value="pelalawan">Kabupaten Pelalawan</option>
              <option value="rokan-hilir">Kabupaten Rokan Hilir</option>
              <option value="rokan-hulu">Kabupaten Rokan Hulu</option>
              <option value="siak">Kabupaten Siak</option>
              <option value="kepulauan-meranti">
                Kabupaten Kepulauan Meranti
              </option>
            </select>
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Tanggal</label>
            <input
              type="date"
              className="w-full rounded-md border border-gray-300 bg-gray-100 px-4 py-2"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Kecamatan</label>
            <input
              type="text"
              placeholder="Kecamatan"
              className="w-full rounded-md border border-gray-300 bg-gray-100 px-4 py-2"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">
              Nama Penerima Laporan
            </label>
            <input
              type="text"
              placeholder="Nama Penerima Laporan"
              className="w-full rounded-md border border-gray-300 bg-gray-100 px-4 py-2"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Kelurahan</label>
            <input
              type="text"
              placeholder="Kelurahan"
              className="w-full rounded-md border border-gray-300 bg-gray-100 px-4 py-2"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Status</label>
            <select className="w-full rounded-md border border-gray-300 bg-gray-100 px-4 py-2">
              <option value="">Status</option>
              <option value="diterima">Terverifikasi</option>
              <option value="diproses">Tidak Terferifikasi</option>
              <option value="ditolak">Sudah Menerima Bantuan</option>
            </select>
          </div>
        </form>

        <div className="flex justify-end mt-8 space-x-4">
          <button
            type="button"
            className="px-6 py-2 bg-[#E7000B] text-white rounded-lg"
          >
            Batal
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-[#157145] text-white rounded-lg"
          >
            Simpan
          </button>
        </div>
      </div>
    </div>
  );
}

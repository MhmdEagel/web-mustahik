export default function DetailData() {
  return (
    <div className="w-full flex justify-center py-10">
      <div className="w-full max-w-6xl bg-white rounded-lg shadow-lg px-10 py-8">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">

          <div>
            <label className="block text-sm font-semibold mb-1">NIK</label>
            <input
              type="text"
              readOnly
              className="w-full rounded-md border border-gray-300 bg-white px-4 py-2"
              placeholder="NIK"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Jumlah Bantuan</label>
            <input
              type="text"
              readOnly
              className="w-full rounded-md border border-gray-300 bg-white px-4 py-2"
              placeholder="Jumlah Bantuan"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Nama</label>
            <input
              type="text"
              readOnly
              className="w-full rounded-md border border-gray-300 bg-white px-4 py-2"
              placeholder="Nama"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Tanggal</label>
            <input
              type="text"
              readOnly
              className="w-full rounded-md border border-gray-300 bg-white px-4 py-2"
              placeholder="Tanggal"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Nomor Telepon</label>
            <input
              type="text"
              readOnly
              className="w-full rounded-md border border-gray-300 bg-white px-4 py-2"
              placeholder="Nomor Telepon"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Nama Penerima Laporan</label>
            <input
              type="text"
              readOnly
              className="w-full rounded-md border border-gray-300 bg-white px-4 py-2"
              placeholder="Nama Penerima"
            />
          </div>

          <div >
            <label className="block text-sm font-semibold mb-1">Alamat</label>
            <textarea
              readOnly
              rows={3}
              className="w-full rounded-md border border-gray-300 bg-white px-4 py-2"
              placeholder="Alamat"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Jenis Bantuan</label>
            <input
              type="text"
              readOnly
              className="w-full rounded-md border border-gray-300 bg-white px-4 py-2"
              placeholder="Jenis Bantuan"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Status</label>
            <input
              type="text"
              readOnly
              className="w-full rounded-md border border-gray-300 bg-white px-4 py-2"
              placeholder="Status"
            />
          </div>
        </form>

        <div className="flex justify-end gap-x-4 mt-8">
          <button
            type="button"
            className="px-6 py-2 rounded-lg bg-[#157145] text-white"
          >
            Kembali
          </button>
          <button
            type="button"
            className="px-6 py-2 rounded-lg bg-[#157145] text-white"
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

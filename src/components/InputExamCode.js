import React from 'react'

export default () => {
  return (
    <div style={{ padding: '15% 30% 0' }}>
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Masukkan kode exam"
          aria-describedby="button-addon2"
        />
        <div class="input-group-append">
          <button
            type="button"
            id="button-addon2"
            style={{
              borderRadius: '0 8px 8px 0',
              backgroundColor: '#384B60',
              border: '#384B60',
              color: '#fff',
              padding: '0 20px'
            }}
          >
            Cari
          </button>
        </div>
      </div>
    </div>
  )
}

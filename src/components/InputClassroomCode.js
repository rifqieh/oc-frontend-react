import React, { useState } from 'react'
import FoundClassroom from './FoundClassroom'

export default () => {
  const [isFind, setIsFind] = useState(false)

  return (
    <div>
      <div style={{ padding: '50px 30% 20px' }}>
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Masukkan kode kelas"
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
              onClick={() => setIsFind(!isFind)}
            >
              Cari
            </button>
          </div>
        </div>
      </div>

      {isFind === false ? null : <FoundClassroom />}
    </div>
  )
}

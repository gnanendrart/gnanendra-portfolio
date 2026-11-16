import { ImageResponse } from 'next/og';
import { site } from '@/content/site';

export const alt = `${site.name}. ${site.headline}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          background: '#FBFBFD',
          color: '#101A3A',
        }}
      >
        <div style={{ display: 'flex', fontSize: 30, fontWeight: 700 }}>{site.name}</div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', fontSize: 84, fontWeight: 700, lineHeight: 1.08, letterSpacing: '-0.02em', maxWidth: 940 }}>
            {site.headline}
          </div>
          <div style={{ display: 'flex', width: 180, height: 8, background: '#2447D6', marginTop: 36, borderRadius: 4 }} />
        </div>
        <div style={{ display: 'flex', fontSize: 30, color: '#3C4566' }}>
          Senior data analyst who ships AI tools. CDC, Teladoc, Cognizant.
        </div>
      </div>
    ),
    size,
  );
}

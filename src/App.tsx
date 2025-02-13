import React, { useState } from 'react';
import { JitsiMeeting } from '@jitsi/react-sdk';
import { Video, VideoOff, Mic, MicOff, Phone, Server } from 'lucide-react';

function App() {
  const [roomName, setRoomName] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [serverDomain, setServerDomain] = useState('meet.jit.si');
  const [joinedMeeting, setJoinedMeeting] = useState(false);

  const handleJoinMeeting = (e: React.FormEvent) => {
    e.preventDefault();
    if (roomName && displayName && serverDomain) {
      setJoinedMeeting(true);
    }
  };

  if (joinedMeeting) {
    return (
      <div className="h-screen w-full">
        <JitsiMeeting
          domain={serverDomain}
          roomName={roomName}
          configOverwrite={{
            startWithAudioMuted: true,
            startWithVideoMuted: false,
            toolbarButtons: [
              'camera',
              'chat',
              'closedcaptions',
              'desktop',
              'fullscreen',
              'fodeviceselection',
              'hangup',
              'microphone',
              'participants-pane',
              'recording',
              'security',
              'settings',
              'shareaudio',
              'sharedvideo',
              'shortcuts',
              'tileview',
            ],
          }}
          interfaceConfigOverwrite={{
            TOOLBAR_BUTTONS: [
              'microphone', 'camera', 'closedcaptions', 'desktop', 'fullscreen',
              'fodeviceselection', 'hangup', 'profile', 'recording',
              'livestreaming', 'etherpad', 'sharedvideo', 'settings', 'raisehand',
              'videoquality', 'filmstrip', 'feedback', 'stats', 'shortcuts',
              'tileview', 'download', 'help', 'mute-everyone', 'security'
            ],
          }}
          userInfo={{
            displayName: displayName
          }}
          onApiReady={() => console.log('Jitsi Meet API ready')}
          getIFrameRef={(iframeRef) => { iframeRef.style.height = '100%'; }}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Unirse a Reunión
        </h1>
        
        <form onSubmit={handleJoinMeeting} className="space-y-4">
          <div>
            <label htmlFor="serverDomain" className="block text-sm font-medium text-gray-700 mb-1">
              Servidor Jitsi
            </label>
            <div className="flex items-center">
              <div className="bg-gray-100 p-2 rounded-l-lg border border-r-0 border-gray-300">
                <Server className="w-5 h-5 text-gray-500" />
              </div>
              <input
                type="text"
                id="serverDomain"
                value={serverDomain}
                onChange={(e) => setServerDomain(e.target.value)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Dominio del servidor (ej: meet.jit.si)"
                required
              />
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Ingresa el dominio sin 'https://' (ej: jitsi.tudominio.com)
            </p>
          </div>

          <div>
            <label htmlFor="roomName" className="block text-sm font-medium text-gray-700 mb-1">
              Nombre de la Sala
            </label>
            <input
              type="text"
              id="roomName"
              value={roomName}
              onChange={(e) => setRoomName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Ingresa el nombre de la sala"
              required
            />
          </div>

          <div>
            <label htmlFor="displayName" className="block text-sm font-medium text-gray-700 mb-1">
              Tu Nombre
            </label>
            <input
              type="text"
              id="displayName"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Ingresa tu nombre"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 flex items-center justify-center gap-2"
          >
            <Video className="w-5 h-5" />
            Unirse a la Reunión
          </button>
        </form>

        <div className="mt-6">
          <div className="flex justify-center space-x-8">
            <div className="flex flex-col items-center">
              <div className="bg-gray-100 p-3 rounded-full">
                <Video className="w-6 h-6 text-gray-600" />
              </div>
              <span className="text-sm text-gray-600 mt-2">Video HD</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-gray-100 p-3 rounded-full">
                <Mic className="w-6 h-6 text-gray-600" />
              </div>
              <span className="text-sm text-gray-600 mt-2">Audio Claro</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-gray-100 p-3 rounded-full">
                <Phone className="w-6 h-6 text-gray-600" />
              </div>
              <span className="text-sm text-gray-600 mt-2">Sin Descargas</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
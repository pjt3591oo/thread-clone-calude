/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useState } from 'react';

const ThreadsClone = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      username: 'clientonlydeveloper',
      displayName: 'clientonlydeveloper',
      avatar: '👨‍💻',
      time: '2시간',
      content: '개발자를 위미로 온티미나 아웃도어 메이 안대해서\n\n어린때는 이대 못했는데 나이먹으니 알겠다\n계속 앉아있다보니 운동을 하게되니 활동적이 않으면 따로도 잘 않육고 건강이 약줄아...',
      likes: 4,
      comments: 2,
      reposts: 0,
      shares: 0,
      liked: false,
      reposted: false,
      verified: false
    },
    {
      id: 2,
      username: 'kentt.me',
      displayName: 'kentt.me',
      avatar: '👨‍💼',
      time: '56분',
      content: '지녀 6시에 잠들어\n아침 9시에 깻다.\n\n15시간,\n이만하면\n잠시만 쓴 것 같다.',
      likes: 8,
      comments: 0,
      reposts: 0,
      shares: 0,
      liked: false,
      reposted: false,
      verified: false
    },
    {
      id: 3,
      username: 'kimkyuho__',
      displayName: 'kimkyuho__',
      avatar: '🧑‍💻',
      time: '6시간',
      content: '운동을 하면서 깨우칸 사심\n\n그냥 한다\n안되도 그냥한다\n하다보면 컬쳐 된다',
      likes: 38,
      comments: 8,
      reposts: 2,
      shares: 0,
      liked: false,
      reposted: false,
      verified: false
    },
    {
      id: 4,
      username: 'arduinobee',
      displayName: 'arduinobee',
      avatar: '🤖',
      time: '50분',
      content: '🚀 "Copilot 의 실력 승진도 만족다!"\nMS는 계발 KPI에 \'AI 증폴률\'을 고식 추가, 팀 평균보다 30 % 낮으면 보상 등급 하향까지 검토하다는 소식\n—이제 코드보다 프로픗드 감도가 커리어를 결정!',
      likes: 3,
      comments: 0,
      reposts: 1,
      shares: 0,
      liked: false,
      reposted: false,
      verified: false
    }
  ]);

  const [followSuggestions] = useState([
    {
      username: 'isti_dbwk',
      displayName: 'ISTJ인 사람',
      followers: '2,636명',
      avatar: '🧑‍💻'
    },
    {
      username: 'data.solve',
      displayName: '인생의 질어보단 툼게, 이젠 무기가 되다!🧠',
      followers: '769명',
      avatar: '📊'
    },
    {
      username: 'steven_kim_18',
      displayName: '❤️ iOS 개발자\n😊 포스트 학울줄..\n🧠 AI 관심이 많아령...',
      followers: '90명',
      avatar: '📱'
    }
  ]);

  const [activities] = useState([
    {
      id: 1,
      username: 'joje0311',
      displayName: 'joje0311',
      action: '[keycloak] 로그인, 회원가입 페이지 커스텀',
      time: '1시간',
      avatar: '👨‍💻'
    },
    {
      id: 2,
      username: 'nolmo_i',
      displayName: 'nolmo_i',
      action: '고마워',
      time: '13시간',
      avatar: '🙂'
    },
    {
      id: 3,
      username: 'nolmo_i',
      displayName: 'nolmo_i',
      action: '오늘일!\n오~~~~ 슈고했어!!!',
      time: '14시간',
      avatar: '🙂',
      likes: 1,
      comments: 1
    }
  ]);

  const [currentUser] = useState({
    username: 'pijontwo',
    displayName: '박정태',
    bio: '웃는일 최미어 개발자\n🌱 스포타미\n- https://withgoods.net/artist/mung\n- https://www.oround.com/mung\n#개발자 #운동 #착실 #직장인',
    followers: '1,654명',
    website: 'blog.naver.com/pjt359100',
    avatar: '🐸'
  });

  const [activeTab, setActiveTab] = useState('home');
  const [newPost, setNewPost] = useState('');

  const [notification, setNotification] = useState('');
  
  const textareaRef = useRef(null);

  const showNotification = (message: any) => {
    setNotification(message);
    setTimeout(() => setNotification(''), 3000);
  };

  const handlePost = () => {
    if (newPost.trim()) {
      const post = {
        id: Date.now(),
        username: currentUser.username,
        displayName: currentUser.displayName,
        avatar: currentUser.avatar,
        time: '지금',
        content: newPost,
        likes: 0,
        comments: 0,
        reposts: 0,
        shares: 0,
        liked: false,
        reposted: false,
        verified: false
      };
      setPosts([post, ...posts]);
      setNewPost('');
      if (textareaRef.current) {
        ((textareaRef.current as any).style as any).height = 'auto';
      }
      showNotification('게시');
      setActiveTab('home');
    }
  };

  const handleLike = (postId: any) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { 
            ...post, 
            liked: !post.liked, 
            likes: post.liked ? post.likes - 1 : post.likes + 1 
          }
        : post
    ));
  };

  const handleTextareaResize = (e: any) => {
    const textarea = e.target;
    textarea.style.height = 'auto';
    textarea.style.height = Math.min(textarea.scrollHeight, 200) + 'px';
  };

  // Icons
  const HomeIcon = ({ active }: any) => (
    <svg className={`w-7 h-7 ${active ? 'fill-white' : 'fill-gray-400'}`} viewBox="0 0 24 24">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
    </svg>
  );

  const SearchIcon = ({ active }: any) => (
    <svg className={`w-7 h-7 ${active ? 'stroke-white' : 'stroke-gray-400'}`} fill="none" viewBox="0 0 24 24" strokeWidth={2}>
      <circle cx="11" cy="11" r="8"/>
      <path d="m21 21-4.35-4.35"/>
    </svg>
  );

  const PlusIcon = ({ active }: any) => (
    <svg className={`w-7 h-7 ${active ? 'stroke-white' : 'stroke-gray-400'}`} fill="none" viewBox="0 0 24 24" strokeWidth={2}>
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
      <line x1="12" y1="8" x2="12" y2="16"/>
      <line x1="8" y1="12" x2="16" y2="12"/>
    </svg>
  );

  const HeartIcon = ({ active }: any) => (
    <svg className={`w-7 h-7 ${active ? 'fill-white stroke-white' : 'stroke-gray-400'}`} fill="none" viewBox="0 0 24 24" strokeWidth={2}>
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>
  );

  const UserIcon = ({ active }: any) => (
    <svg className={`w-7 h-7 ${active ? 'stroke-white' : 'stroke-gray-400'}`} fill="none" viewBox="0 0 24 24" strokeWidth={2}>
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
      <circle cx="12" cy="7" r="4"/>
    </svg>
  );

  const PostCard = ({ post }: any) => (
    <div className="border-b border-gray-800 p-4">
      <div className="flex space-x-3">
        <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-xl">
          {post.avatar}
        </div>
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-white font-medium">{post.displayName}</span>
            <span className="text-gray-500 text-sm">{post.time}</span>
          </div>
          <p className="text-white text-sm leading-relaxed mb-3 whitespace-pre-line">{post.content}</p>
          <div className="flex items-center space-x-6 text-gray-400">
            <button 
              className="flex items-center space-x-1 hover:text-red-400 transition-colors"
              onClick={() => handleLike(post.id)}
            >
              <svg className={`w-4 h-4 ${post.liked ? 'fill-red-400 text-red-400' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span className="text-sm">{post.likes}</span>
            </button>
            <button className="flex items-center space-x-1 hover:text-blue-400 transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span className="text-sm">{post.comments}</span>
            </button>
            <button className="flex items-center space-x-1 hover:text-green-400 transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <span className="text-sm">{post.reposts}</span>
            </button>
            <button className="hover:text-gray-300 transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch(activeTab) {
      case 'search':
        return (
          <div className="text-white">
            <div className="p-4 border-b border-gray-800">
              <h2 className="text-xl font-bold mb-4">팔로우 추천</h2>
              <div className="space-y-4">
                {followSuggestions.map((user, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-xl">
                        {user.avatar}
                      </div>
                      <div>
                        <div className="text-white font-medium">{user.username}</div>
                        <div className="text-gray-400 text-sm">{user.displayName}</div>
                        <div className="text-gray-500 text-xs">팔로워 {user.followers}</div>
                      </div>
                    </div>
                    <button className="px-4 py-1.5 bg-white text-black rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
                      팔로우
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      
      case 'compose':
        return (
          <div className="text-white">
            <div className="p-4 border-b border-gray-800">
              <div className="flex items-center justify-between mb-4">
                <button 
                  className="text-gray-400 hover:text-white"
                  onClick={() => setActiveTab('home')}
                >
                  취소
                </button>
                <h2 className="text-lg font-bold">새로운 스레드</h2>
                <div></div>
              </div>
              <div className="bg-gray-900 rounded-lg p-4 mb-4">
                <p className="text-gray-400 text-sm mb-2">스포일러 경고 이설 스토에서 무시는</p>
                <p className="text-gray-400 text-sm">포시될 수 있습니다.</p>
                <button className="text-gray-400 hover:text-white mt-2">✕</button>
              </div>
              <div className="flex space-x-3">
                <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-xl">
                  {currentUser.avatar}
                </div>
                <div className="flex-1">
                  <div className="mb-2">
                    <span className="text-white font-medium">{currentUser.username}</span>
                    <span className="text-gray-400 ml-2">• 누게 추가</span>
                  </div>
                  <textarea
                    ref={textareaRef}
                    value={newPost}
                    onChange={(e) => {
                      setNewPost(e.target.value);
                      handleTextareaResize(e);
                    }}
                    placeholder="새로운 소식이 있나요?"
                    className="w-full bg-transparent text-white placeholder-gray-500 resize-none outline-none text-lg min-h-[100px]"
                  />
                  <div className="flex items-center space-x-4 mt-3 text-gray-400">
                    <button className="hover:text-white">📷</button>
                    <button className="hover:text-white">🎵</button>
                    <button className="hover:text-white">😊</button>
                    <button className="hover:text-white">📊</button>
                    <button className="hover:text-white">📍</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-center space-x-3 text-gray-400">
                <span className="text-sm">누구에게나 답글 및 인용 허용</span>
              </div>
              <button
                onClick={handlePost}
                disabled={!newPost.trim()}
                className="w-full mt-4 py-3 bg-white text-black rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-200 transition-colors"
              >
                게시
              </button>
            </div>
          </div>
        );
      
      case 'activity':
        return (
          <div className="text-white">
            <div className="p-4 border-b border-gray-800">
              <div className="flex space-x-4 mb-4">
                {['모두', '팔로우', '답글', '인증', '인용', '리포스트', '인증됨'].map((tab, index) => (
                  <button 
                    key={index}
                    className={`px-3 py-1.5 rounded-full text-sm ${index === 0 ? 'bg-white text-black' : 'text-gray-400 hover:text-white'}`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <div className="space-y-4">
                {activities.map((activity) => (
                  <div key={activity.id} className="flex space-x-3">
                    <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-lg">
                      {activity.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <span className="text-white font-medium">{activity.username}</span>
                        <span className="text-gray-500 text-sm">{activity.time}</span>
                      </div>
                      <p className="text-gray-300 text-sm mt-1 whitespace-pre-line">{activity.action}</p>
                      {activity.likes && (
                        <div className="flex items-center space-x-4 mt-2 text-gray-400">
                          <div className="flex items-center space-x-1">
                            <span className="text-red-400">❤️</span>
                            <span className="text-sm">{activity.likes}</span>
                          </div>
                          {activity.comments && (
                            <div className="flex items-center space-x-1">
                              <span>💬</span>
                              <span className="text-sm">{activity.comments}</span>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      
      case 'profile':
        return (
          <div className="text-white">
            <div className="p-4">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h1 className="text-2xl font-bold mb-1">{currentUser.displayName}</h1>
                  <p className="text-gray-400 mb-3">{currentUser.username}</p>
                  <p className="text-white text-sm leading-relaxed mb-3 whitespace-pre-line">{currentUser.bio}</p>
                  <div className="flex items-center space-x-4 mb-4">
                    <button className="px-4 py-1.5 border border-gray-600 rounded-lg text-sm">편집</button>
                    <button className="px-4 py-1.5 border border-gray-600 rounded-lg text-sm">요청함</button>
                    <button className="px-4 py-1.5 border border-gray-600 rounded-lg text-sm">개발자</button>
                    <button className="p-1.5 border border-gray-600 rounded-lg">+</button>
                  </div>
                  <div className="flex items-center space-x-1 text-gray-400 text-sm mb-2">
                    <span>👥</span>
                    <span>팔로워 {currentUser.followers}</span>
                    <span className="text-blue-400">• {currentUser.website}</span>
                  </div>
                </div>
                <div className="w-20 h-20 rounded-full bg-gray-700 flex items-center justify-center text-4xl ml-4">
                  {currentUser.avatar}
                </div>
              </div>
              
              <div className="border-b border-gray-800">
                <div className="flex space-x-8">
                  <button className="pb-3 border-b-2 border-white text-white font-medium">스레드</button>
                  <button className="pb-3 text-gray-400">답글</button>
                  <button className="pb-3 text-gray-400">미디어</button>
                  <button className="pb-3 text-gray-400">리포스트</button>
                </div>
              </div>
              
              <div className="mt-4">
                <div className="flex space-x-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-xl">
                    {currentUser.avatar}
                  </div>
                  <input 
                    type="text" 
                    placeholder="새로운 소식이 있나요?"
                    className="flex-1 bg-transparent text-white placeholder-gray-500 outline-none"
                  />
                  <button className="px-4 py-2 bg-white text-black rounded-lg text-sm font-medium">게시</button>
                </div>
                
                <div className="space-y-4">
                  <div className="flex space-x-3">
                    <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-xl">
                      {currentUser.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-white font-medium">{currentUser.username}</span>
                        <span className="text-gray-500 text-sm">2시간</span>
                      </div>
                      <p className="text-white text-sm mb-2">[keycloak] 로그인, 회원가입 페이지 커스텀</p>
                      <a href="#" className="text-blue-400 text-sm">blog.naver.com/pjt359...</a>
                      <div className="mt-3 rounded-lg overflow-hidden">
                        <img 
                          src="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=200&fit=crop" 
                          alt="Post content"
                          className="w-full h-48 object-cover"
                        />
                      </div>
                      <div className="flex items-center space-x-6 mt-3 text-gray-400">
                        <button className="flex items-center space-x-1">
                          <span>❤️</span>
                          <span className="text-sm">1</span>
                        </button>
                        <button>💬</button>
                        <button>🔄</button>
                        <button>📤</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
      default:
        return (
          <div>
            <div className="p-4 border-b border-gray-800">
              <div className="flex space-x-2">
                <button className="text-white font-medium border-b-2 border-white pb-2">추천</button>
                <button className="text-gray-400 pb-2 ml-8">팔로잉</button>
              </div>
            </div>
            <div>
              {posts.map(post => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Notification */}
      {notification && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded-lg z-50">
          {notification}
        </div>
      )}

      {/* Header */}
      <header className="sticky top-0 bg-black border-b border-gray-800 z-10">
        <div className="max-w-lg mx-auto px-4 py-3">
          <div className="flex items-center justify-center">
            <div className="w-8 h-8 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white">
                <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.5 12.042v-.091C1.5 8.407 2.35 5.553 3.995 3.502 5.845 1.205 8.598.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-.542-1.934-1.404-3.38-2.563-4.299-1.357-1.076-3.225-1.623-5.55-1.623-.007 0-.014 0-.02 0-2.746.02-4.77.818-6.012 2.371C4.98 6.18 4.31 8.328 4.31 11.967v.088c0 3.64.67 5.787 2.043 7.384 1.243 1.553 3.266 2.351 6.012 2.371.007 0 .014 0 .02 0 2.325 0 4.193-.547 5.55-1.623 1.159-.919 2.021-2.365 2.563-4.299l2.04.569c-.651 2.337-1.832 4.177-3.509 5.467C17.229 23.275 14.932 23.98 12.186 24z"/>
              </svg>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-lg mx-auto min-h-screen">
        {renderContent()}
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-black border-t border-gray-800">
        <div className="max-w-lg mx-auto">
          <div className="flex items-center justify-around py-3">
            <button 
              className={`p-3 transition-colors ${activeTab === 'home' ? 'text-white' : 'text-gray-400'}`}
              onClick={() => setActiveTab('home')}
            >
              <HomeIcon active={activeTab === 'home'} />
            </button>
            
            <button 
              className={`p-3 transition-colors ${activeTab === 'search' ? 'text-white' : 'text-gray-400'}`}
              onClick={() => setActiveTab('search')}
            >
              <SearchIcon active={activeTab === 'search'} />
            </button>
            
            <button 
              className={`p-3 transition-colors ${activeTab === 'compose' ? 'text-white' : 'text-gray-400'}`}
              onClick={() => setActiveTab('compose')}
            >
              <PlusIcon active={activeTab === 'compose'} />
            </button>
            
            <button 
              className={`p-3 transition-colors ${activeTab === 'activity' ? 'text-white' : 'text-gray-400'}`}
              onClick={() => setActiveTab('activity')}
            >
              <HeartIcon active={activeTab === 'activity'} />
            </button>
            
            <button 
              className={`p-3 transition-colors ${activeTab === 'profile' ? 'text-white' : 'text-gray-400'}`}
              onClick={() => setActiveTab('profile')}
            >
              <UserIcon active={activeTab === 'profile'} />
            </button>
          </div>
        </div>
      </nav>

      {/* Bottom padding for fixed nav */}
      <div className="h-16"></div>
    </div>
  );
};

export default ThreadsClone;
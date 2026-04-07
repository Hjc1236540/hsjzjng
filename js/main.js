const ancestorsData = [
    {
        id: 1,
        name: '大源',
        zi: '未知',
        hao: '未知',
        birthDate: '未知',
        deathDate: '未知',
        photo: '👴',
        brief: '一生勤俭持家，德高望重，为家族发展奠定了坚实基础。',
        biography: '未知',
        achievements: '创办家族私塾，培育后辈；修桥铺路，造福乡邻。',
        familyRelations: {
            father: '胜公（先祖）',
            mother: '未知',
            spouse: '未知',
            children: [ '本法']  
        },
        memorial: '音容宛在，风范长存。'
    },
    {
        id: 2,
        name: '本法',
        zi: '未知',
        hao: '未知',
        birthDate: '未知',
        deathDate: '未知',
        photo: '👨',
        brief: '承前启后，继往开来，为家族的发展做出了重要贡。',
        biography: '  未知',
        achievements: '未知，已知有光联。',
        familyRelations: {
            father: '大源',
            mother: '未知',
            spouse: '未知',
            children: [ '光联（是否是这个联，有待考证。）']
        },
        memorial: '音容宛在，风范长存。'
    },
    {
        id: 3,
        name: '光联',
        zi: '未知',
        hao: '未知',
        birthDate: '未知',
        deathDate: '未知',
        photo: '👨',
        brief: '承前启后，继往开来，为家族的发展做出了重要贡献。',
        biography: '未知',
        achievements: '未知',
        familyRelations: {
            father: '本法',
            mother: '未知',
            spouse: '太{待更新}',
            children: ['宗妖']
        },
        memorial: '勤勤恳恳，任劳任怨。'
    },
     {
        id: 4,
        name: '太',
        zi: '未知',
        hao: '未知',
        birthDate: '未知',
        deathDate: '未知',
        photo: '👵',
        brief: '贤良淑德，相夫教子，为家族培育后代，传承家风做出了重要贡献。（名字待更新）',
        biography: '未知',
        achievements: '未知',
        familyRelations: {
            father: '未知',
            mother: '未知',
            spouse: '光联',
            children: ['宗跃']
        },
        memorial: '勤勤恳恳，任劳任怨。'
    },
     {
        id: 5,
        name: '宗跃',
        zi: '未知',
        hao: '未知',
        birthDate: '未知',
        deathDate: '未知',
        photo: '👨',
        brief: '承前启后，继往开来，为家族的发展做出了重要贡献。',
        biography: '宗跃生于乱世，长于红旗下。青年时期投身革命，中年后致力于家乡建设。',
        achievements: '兴办教育，改善民生；修缮族谱，传承家风。',
        familyRelations: {
            father: '光联',
            mother: '未知',
            spouse: '奶{名字待更新}',
            children: ['开明、开发、开忠、开斌']
        },
        memorial: '勤勤恳恳，任劳任怨。（这个有待考证。）'
    }
    ,
     {
        id: 6,
        name: '开明',
        zi: '未知',
        hao: '未知',
        birthDate: '未知',
        deathDate: '未知',
        photo: '👨',
        brief: '承前启后，继往开来，为家族的发展做出了重要贡献。',
        biography: '开明生在红旗下，活在春风里。青年时期投身集体，中年后致力于家乡建设。',
        achievements: '修缮族谱，传承家风。',
        familyRelations: {
            father: '宗跃',
            mother: '太',
            spouse: '大妈{名字待更新}',
            children: ['祥顺、祥松、祥贵']
        },
        memorial: '勤勤恳恳，任劳任怨。'
    }
    ,
     {
        id: 7,
        name: '三妈',
        zi: '未知',
        hao: '未知',
        birthDate: '未知',
        deathDate: '未知',
        photo: '👵',
        brief: '贤良淑德，相夫教子，为家族培育后代，传承家风做出了重要贡献。',
        biography: '未知',
        achievements: '未知',
        familyRelations: {
            father: '未知',
            mother: '未知',
            spouse: '三爹',
            children: ['祥丁、细菊、燕菊']
        },
        memorial: '勤勤恳恳，任劳任怨。'
    }
];

const familyTreeData = [
    {
        generation: '第一代',
        members: [
            { id: 0, name: '胜公', relation: '始祖二房' },
            { id: 0, name: '夫人', relation: '未知' }
        ]
    },
     {
        generation: '第二代',
        members: [
            { id: 0, name: '月高', relation: '' },
            { id: 0, name: '夫人', relation: '未知' }
        ]
    },
     {
        generation: '第三代',
        members: [
            { id: 0, name: '琳公', relation: '' },
            { id: 0, name: '夫人', relation: '未知' }
        ]
    },
     {
        generation: '第四代',
        members: [
            { id: 0, name: '向道', relation: '' },
            { id: 0, name: '夫人', relation: '未知' }
        ]
    },
     {
        generation: '第五代',
        members: [
            { id: 0, name: '来相', relation: '' },
            { id: 0, name: '夫人', relation: '未知' }
        ]
    },
    {
        generation: '第六代',
        members: [
            { id: 0, name: '学渊', relation: '' },
            { id: 0, name: '夫人', relation: '未知' }
        ]
    },
    {
        generation: '第七代',
        members: [
            { id: 0, name: '奉鼎', relation: '' },
            { id: 0, name: '夫人', relation: '未知' }
        ]
    },
    {
        generation: '第八代',
        members: [
            { id: 0, name: '汧公', relation: '' },
            { id: 0, name: '夫人', relation: '未知' }
        ]
    },
    {
        generation: '第九代',
        members: [
            { id: 0, name: '之余', relation: '' },
            { id: 0, name: '夫人', relation: '未知' }
        ]
    },
    {
        generation: '第十代',
        members: [
            { id: 0, name: '起珽', relation: '' },
            { id: 0, name: '夫人', relation: '未知' }
        ]
    },
    {
        generation: '第十一代',
        members: [
            { id: 0, name: '元塊（kuai）', relation: '' },
            { id: 0, name: '夫人', relation: '未知' }
        ]
    },
    {
        generation: '第十二代',
        members: [
            { id: 0, name: '承锦', relation: '' },
            { id: 0, name: '夫人', relation: '未知' }
        ]
    },
    {
        generation: '第十三代',
        members: [
            { id: 0, name: '世隆', relation: '' },
            { id: 0, name: '夫人', relation: '未知' }
        ]
    },
    {
        generation: '第十四代',
        members: [
            { id: 0, name: '大源', relation: '' },
            { id: 0, name: '夫人', relation: '未知' }
        ]
    },
    {
        generation: '第十五代',
        members: [
            { id: 0, name: '本法', relation: '' },
            { id: 0, name: '夫人', relation: '未知' }
        ]
    },
    {
        generation: '第十六代',
        members: [
            { id: 0, name: '光联', relation: '' },
            { id: 0, name: '夫人', relation: '太' }
        ]
    },
    ,
    {
        generation: '第十七代',
        members: [
            { id: 0, name: '宗跃', relation: '' },
            { id: 0, name: '夫人', relation: '奶' }
        ]
    },

    {
        generation: '第十八代',
        members: [
            { id: 0, name: '开明', relation: '长子' },
            { id: 0, name: '开发', relation: '二子' },
            { id: 0, name: '开忠', relation: '三子' },
            { id: 0, name: '开斌', relation: '四子' },
            { id: 0, name: '大姑娘', relation: '长女' },
            { id: 0, name: '大满', relation: '二女' },
            { id: 0, name: '细满', relation: '三女' }
        ]
    },
    {
        generation: '第十九代',
        members: [
            { id: 0, name: '祥顺', relation: '父开明' },
            { id: 0, name: '祥松', relation: '父开明' },
            { id: 0, name: '祥贵', relation: '父开明' },
            { id: 0, name: '祥磷', relation: '父开发' },
            { id: 0, name: '祥丁', relation: '父开忠' },
            { id: 0, name: '俊超', relation: '父开斌' },
            { id: 0, name: '俊婷', relation: '父开斌' },
        ]
    },
    {
        generation: '第二十代',
        members: [
            { id: 0, name: '胡浩', relation: '父祥顺' },
            { id: 0, name: '胡裕', relation: '父祥顺' },
            { id: 0, name: '路遥', relation: '父样松' },
            { id: 0, name: '毓彪', relation: '父祥贵' },
            { id: 0, name: '毓全', relation: '父祥贵' },
            { id: 0, name: '雪琴', relation: '父祥磷' },
            { id: 0, name: '胡正', relation: '父祥磷' },
            { id: 0, name: '六漓', relation: '父祥丁' },
            { id: 0, name: '毓涛', relation: '父祥丁' },
        ]
    }
];

const memorialTimelineData = [
     {
        id: 1,
        year: '2026',
        date: '2026年4月5日',
        title: '丙午年清明祭祖',
        description: '家族众人齐聚祖坟，举行庄重的祭扫仪式。',
        location: '祖籍墓地',
        media: [
            { 
                type: 'image', 
                urls: [
                    'images/ancestor-01.jpg',
                    'images/ancestor-02.jpg',
                    'images/ancestor-03.jpg',
                    'images/ancestor-04.jpg',
                    'images/ancestor-05.jpg',
                    'images/ancestor-06.jpg',
                    'images/ancestor-07.jpg',
                    'images/ancestor-08.jpg',
                    'images/ancestor-09.jpg',
                    'images/ancestor-10.jpg'
                ], 
                caption: '祭祖活动照片' 
            },
            { 
                type: 'video', 
                urls: [
                    'video/memorial-video.mp4',
                    'video/memoria2-video.mp4',
                    'video/memoria3-video.mp4',
                    'video/memoria4-video.mp4',
                    'video/memoria5-video.mp4',
                    'video/memoria6-video.mp4',
                    'video/memoria7-video.mp4'
                    
                ], 
                caption: '祭祖仪式视频' 
            }
        ]
    },
     {
        id: 2,
        year: '2025',
        date: '2025年4月5日',
        title: '乙巳年清明祭祖',
        description: '家族众人齐聚祖坟，举行庄重的祭扫仪式。',
        location: '祖籍墓地',
        media: [
            { type: 'image', url: 'placeholder', caption: '祭祖活动照片' },
            { type: 'video', url: 'placeholder', caption: '祭祖仪式视频' }
        ]
    },
    {
        id: 3,
        year: '2024',
        date: '2024年4月5日',
        title: '甲辰年清明祭祖',
        description: '家族十余人齐聚祖坟，举行庄重的祭扫仪式。',
        location: '祖籍墓地',
        media: [
            { type: 'image', url: 'placeholder', caption: '祭祖照片' },
            { type: 'image', url: 'placeholder', caption: '敬献花圈' }
        ]
    },
    {
        id: 4,
        year: '2023',
        date: '2023年4月5日',
        title: '癸卯年清明祭祖',
        description: '疫情后首次大规模家族团聚，祭扫先祖，共话亲情。',
        location: '祖籍墓地',
        media: [
            { type: 'image', url: 'placeholder', caption: '扫墓现场' },
            { type: 'video', url: 'placeholder', caption: '祭祖仪式视频' }
        ]
    },
    {
        id: 5,
        year: '2022',
        date: '2022年4月5日',
        title: '壬寅年清明祭祖',
        description: '因疫情影响，采用线上线下结合方式，各地宗亲同步遥祭。',
        location: '各地分会场',
        media: [
            { type: 'image', url: 'placeholder', caption: '线上祭祖截图' },
            { type: 'video', url: 'placeholder', caption: '祭祖仪式视频' }
        ]
    }
];

let currentCarouselIndex = 0;
let carouselInterval;

function initCarousel() {
    const items = document.querySelectorAll('.carousel-item');
    const indicators = document.querySelectorAll('.indicator');

    function showSlide(index) {
        items.forEach((item, i) => {
            item.classList.remove('active');
            indicators[i].classList.remove('active');
        });
        items[index].classList.add('active');
        indicators[index].classList.add('active');
    }

    function nextSlide() {
        currentCarouselIndex = (currentCarouselIndex + 1) % items.length;
        showSlide(currentCarouselIndex);
    }

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentCarouselIndex = index;
            showSlide(currentCarouselIndex);
            resetCarouselInterval();
        });
    });

    carouselInterval = setInterval(nextSlide, 5000);
}

function resetCarouselInterval() {
    clearInterval(carouselInterval);
    carouselInterval = setInterval(() => {
        currentCarouselIndex = (currentCarouselIndex + 1) % 3;
        const items = document.querySelectorAll('.carousel-item');
        const indicators = document.querySelectorAll('.indicator');
        items.forEach((item, i) => {
            item.classList.remove('active');
            indicators[i].classList.remove('active');
        });
        items[currentCarouselIndex].classList.add('active');
        indicators[currentCarouselIndex].classList.add('active');
    }, 5000);
}

function renderAncestors() {
    const grid = document.getElementById('ancestorsGrid');
    if (!grid) return;

    grid.innerHTML = ancestorsData.map(ancestor => `
        <div class="ancestor-card" onclick="viewAncestor(${ancestor.id})">
            <div class="ancestor-photo">${ancestor.photo}</div>
            <div class="ancestor-info">
                <h3 class="ancestor-name">${ancestor.name}</h3>
                <p class="ancestor-dates">${ancestor.birthDate} - ${ancestor.deathDate}</p>
                <p class="ancestor-brief">${ancestor.brief}</p>
            </div>
        </div>
    `).join('');
}

function viewAncestor(id) {
    window.location.href = `pages/ancestor.html?id=${id}`;
}

function renderMemorialTimeline() {
    const timelineContainer = document.getElementById('timelineContainer');
    if (!timelineContainer) return;

    timelineContainer.innerHTML = memorialTimelineData.map((item, index) => `
        <div class="timeline-item ${index % 2 === 0 ? 'left' : 'right'}">
            <div class="timeline-content">
                <div class="timeline-year">${item.year}</div>
                <h3 class="timeline-title">${item.title}</h3>
                <p class="timeline-date">📅 ${item.date}</p>
                <p class="timeline-location">📍 ${item.location}</p>
                <p class="timeline-description">${item.description}</p>
                ${item.media && item.media.length > 0 ? `
                    <div class="timeline-media">
                        ${item.media.map((m, mediaIndex) => `
                            <div class="media-item">
                                ${renderMediaCarousel(m, item.id, mediaIndex)}
                                <p style="text-align: center; font-size: 0.85rem; color: #666; margin-top: 10px;">${m.caption}</p>
                            </div>
                        `).join('')}
                    </div>
                ` : ''}
            </div>
        </div>
    `).join('');
}

function renderMediaCarousel(media, timelineId, mediaIndex) {
    const urls = media.urls || (media.url ? [media.url] : ['placeholder']);
    const uniqueId = `${timelineId}-${mediaIndex}`;
    
    if (urls.length === 0) {
        return `<div class="media-placeholder">暂无媒体</div>`;
    }

    const isAllPlaceholder = urls.every(url => url === 'placeholder');
    
    if (isAllPlaceholder) {
        return `<div class="media-placeholder ${media.type === 'image' ? 'image-placeholder' : 'video-placeholder'}">
            ${media.type === 'image' ? '🖼️' : '🎬'} ${media.caption}
        </div>`;
    }

    return `
        <div class="media-carousel" id="carousel-${uniqueId}">
            <div class="carousel-track" id="track-${uniqueId}">
                ${urls.map((url, i) => `
                    <div class="carousel-slide">
                        ${media.type === 'image' 
                            ? (url === 'placeholder' 
                                ? `<div class="media-placeholder">🖼️</div>`
                                : `<img src="${url}" alt="${media.caption}" class="carousel-image" onclick="window.open('${url}', '_blank')">`)
                            : (url === 'placeholder'
                                ? `<div class="media-placeholder">🎬</div>`
                                : `<video controls class="carousel-video" preload="metadata">
                                       <source src="${url}" type="video/mp4">
                                       您的浏览器不支持视频播放。
                                   </video>`)
                        }
                    </div>
                `).join('')}
            </div>
            ${urls.length > 1 ? `
                <button class="carousel-btn carousel-prev" onclick="prevSlide('${uniqueId}')">❮</button>
                <button class="carousel-btn carousel-next" onclick="nextSlide('${uniqueId}')">❯</button>
                <div class="carousel-dots" id="dots-${uniqueId}">
                    ${urls.map((_, i) => `
                        <span class="carousel-dot ${i === 0 ? 'active' : ''}" onclick="goToSlide('${uniqueId}', ${i})"></span>
                    `).join('')}
                </div>
            ` : ''}
        </div>
    `;
}

const carouselState = {};

function initCarouselState(uniqueId) {
    if (!carouselState[uniqueId]) {
        carouselState[uniqueId] = { currentIndex: 0 };
    }
}

function updateCarousel(uniqueId) {
    const track = document.getElementById(`track-${uniqueId}`);
    const dots = document.querySelectorAll(`#dots-${uniqueId} .carousel-dot`);
    const state = carouselState[uniqueId];
    
    if (!track) return;
    
    track.style.transform = `translateX(-${state.currentIndex * 100}%)`;
    
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === state.currentIndex);
    });
}

function prevSlide(uniqueId) {
    initCarouselState(uniqueId);
    const track = document.getElementById(`track-${uniqueId}`);
    const slideCount = track.querySelectorAll('.carousel-slide').length;
    
    carouselState[uniqueId].currentIndex = (carouselState[uniqueId].currentIndex - 1 + slideCount) % slideCount;
    updateCarousel(uniqueId);
}

function nextSlide(uniqueId) {
    initCarouselState(uniqueId);
    const track = document.getElementById(`track-${uniqueId}`);
    const slideCount = track.querySelectorAll('.carousel-slide').length;
    
    carouselState[uniqueId].currentIndex = (carouselState[uniqueId].currentIndex + 1) % slideCount;
    updateCarousel(uniqueId);
}

function goToSlide(uniqueId, index) {
    initCarouselState(uniqueId);
    carouselState[uniqueId].currentIndex = index;
    updateCarousel(uniqueId);
}

function initTouchSwipe() {
    const carousels = document.querySelectorAll('.media-carousel');
    
    carousels.forEach((carousel) => {
        const uniqueId = carousel.id.replace('carousel-', '');
        let touchStartX = 0;
        let touchEndX = 0;
        
        carousel.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });
        
        carousel.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe(uniqueId, touchStartX, touchEndX);
        }, { passive: true });
    });
}

function handleSwipe(uniqueId, startX, endX) {
    const threshold = 50;
    const diff = startX - endX;
    
    if (Math.abs(diff) > threshold) {
        if (diff > 0) {
            nextSlide(uniqueId);
        } else {
            prevSlide(uniqueId);
        }
    }
}

const firebaseConfig = {
    apiKey: "AIzaSyCZYFMMsDLA10s-3285VQE4p7l7bWk0uA4",
    authDomain: "qingming-memorial.firebaseapp.com",
    databaseURL: "https://qingming-memorial-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "qingming-memorial",
    storageBucket: "qingming-memorial.firebasestorage.app",
    messagingSenderId: "342758055593",
    appId: "1:342758055593:web:6a5645d49e90ded65f13b8"
};

let firebaseDB = null;
let firebaseAuth = null;
let currentUser = null;
let currentUserName = '';

function initFirebase() {
    try {
        if (!window.firebaseApp || !window.firebaseAuthInstance) {
            setTimeout(initFirebase, 500);
            return;
        }

        firebaseDB = window.FirebaseDatabase.getDatabase(window.firebaseApp);
        firebaseAuth = window.firebaseAuthInstance;
        
        document.getElementById('firebaseConfigNotice').style.display = 'none';
        document.getElementById('cloudMessageFormContainer').style.display = 'block';
        
        initAuth();
        initEmojiPicker();
        loadCloudMessages();
        initCloudMessageForm();
        initWorship();
    } catch (error) {
        console.error('Firebase 初始化失败:', error);
        updateFirebaseNotice('Firebase 配置错误，请检查配置');
    }
}

function initEmojiPicker() {
    const emojiItems = document.querySelectorAll('.emoji-item');
    const textarea = document.getElementById('cloudMessageContent');
    
    emojiItems.forEach(item => {
        item.addEventListener('click', () => {
            const emoji = item.dataset.emoji;
            const cursorPos = textarea.selectionStart;
            const textBefore = textarea.value.substring(0, cursorPos);
            const textAfter = textarea.value.substring(cursorPos);
            
            textarea.value = textBefore + emoji + textAfter;
            textarea.focus();
            textarea.selectionStart = cursorPos + emoji.length;
            textarea.selectionEnd = cursorPos + emoji.length;
        });
    });
}

function initAuth() {
    window.FirebaseAuth.onAuthStateChanged(firebaseAuth, (user) => {
        currentUser = user;
        updateAuthUI();
    });
}

function updateAuthUI() {
    if (currentUser) {
        const userRef = window.FirebaseDatabase.ref(firebaseDB, `users/${currentUser.uid}`);
        window.FirebaseDatabase.onValue(userRef, (snapshot) => {
            const userData = snapshot.val();
            if (userData && userData.name) {
                currentUserName = userData.name;
            }
        }, { onlyOnce: true });
    }
}

function updateFirebaseNotice(text) {
    const notice = document.getElementById('firebaseConfigNotice');
    if (notice) {
        notice.innerHTML = `<p>🔧 ${text}</p><p style="font-size: 0.9rem; margin-top: 10px;">如需配置请查看 README.md</p>`;
    }
}

let isAdmin = false;

function checkAdminPassword() {
    const password = prompt('请输入管理员密码：');
    if (password === 'admin123') {
        isAdmin = true;
        alert('管理员验证成功！现在可以删除留言了。');
        loadCloudMessages();
    } else if (password !== null) {
        alert('密码错误！');
    }
}

function deleteMessage(messageId) {
    if (!isAdmin) {
        alert('只有管理员可以删除留言！');
        return;
    }
    
    if (confirm('确定要删除这条留言吗？')) {
        const messageRef = window.FirebaseDatabase.ref(firebaseDB, `messages/${messageId}`);
        window.FirebaseDatabase.set(messageRef, null);
    }
}

function deleteReply(messageId, replyId) {
    if (!isAdmin) {
        alert('只有管理员可以删除回复！');
        return;
    }
    
    if (confirm('确定要删除这条回复吗？')) {
        const replyRef = window.FirebaseDatabase.ref(firebaseDB, `messages/${messageId}/replies/${replyId}`);
        window.FirebaseDatabase.set(replyRef, null);
    }
}

function showReplyForm(messageId) {
    const form = document.getElementById(`reply-form-${messageId}`);
    if (form) {
        form.style.display = form.style.display === 'none' ? 'block' : 'none';
    }
}

function submitReply(messageId) {
    const contentInput = document.getElementById(`reply-content-${messageId}`);
    
    const content = contentInput.value.trim();
    
    if (!content) {
        alert('请填写回复内容！');
        return;
    }
    
    if (!currentUserName) {
        alert('正在加载用户信息，请稍候...');
        return;
    }
    
    const now = new Date();
    const dateStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    
    const newReply = {
        name: currentUserName,
        content: content,
        date: dateStr,
        timestamp: now.getTime(),
        userId: currentUser ? currentUser.uid : ''
    };
    
    const repliesRef = window.FirebaseDatabase.ref(firebaseDB, `messages/${messageId}/replies`);
    window.FirebaseDatabase.push(repliesRef, newReply);
    
    contentInput.value = '';
    document.getElementById(`reply-form-${messageId}`).style.display = 'none';
    createFloatingEffect('💬');
}

function loadCloudMessages() {
    if (!firebaseDB) return;
    
    const messagesRef = window.FirebaseDatabase.ref(firebaseDB, 'messages');
    
    window.FirebaseDatabase.onValue(messagesRef, (snapshot) => {
        const data = snapshot.val();
        renderCloudMessages(data);
    });
}

function renderCloudMessages(data) {
    const messagesList = document.getElementById('cloudMessagesList');
    
    if (!data) {
        messagesList.innerHTML = '<div class="empty-messages">暂无留言，来做第一个留言的人吧！</div>';
        return;
    }
    
    const messages = Object.keys(data)
        .map(key => ({ id: key, ...data[key] }))
        .sort((a, b) => new Date(b.date) - new Date(a.date));
    
    messagesList.innerHTML = messages.map(msg => {
        const replies = msg.replies ? Object.keys(msg.replies)
            .map(key => ({ id: key, ...msg.replies[key] }))
            .sort((a, b) => new Date(a.date) - new Date(b.date)) : [];
        
        return `
            <div class="message-item">
                <div class="message-header">
                    <span class="message-author">${escapeHtml(msg.name)}</span>
                    <span class="message-date">${msg.date}</span>
                    ${isAdmin ? `<button class="delete-btn" onclick="deleteMessage('${msg.id}')">🗑️ 删除</button>` : ''}
                </div>
                <div class="message-content">${escapeHtml(msg.content)}</div>
                <div class="message-actions">
                    <button class="reply-btn" onclick="showReplyForm('${msg.id}')">💬 回复</button>
                    ${!isAdmin ? `<button class="admin-btn" onclick="checkAdminPassword()">🔑 管理员</button>` : ''}
                </div>
                
                <div class="reply-form" id="reply-form-${msg.id}" style="display: none;">
                    <textarea id="reply-content-${msg.id}" class="reply-textarea" placeholder="写下您的回复..."></textarea>
                    <div class="reply-buttons">
                        <button class="submit-reply-btn" onclick="submitReply('${msg.id}')">发表回复</button>
                        <button class="cancel-reply-btn" onclick="document.getElementById('reply-form-${msg.id}').style.display='none'">取消</button>
                    </div>
                </div>
                
                ${replies.length > 0 ? `
                    <div class="replies-container">
                        ${replies.map(reply => `
                            <div class="reply-item">
                                <div class="reply-header">
                                    <span class="reply-author">${escapeHtml(reply.name)}</span>
                                    <span class="reply-date">${reply.date}</span>
                                    ${isAdmin ? `<button class="delete-reply-btn" onclick="deleteReply('${msg.id}', '${reply.id}')">🗑️</button>` : ''}
                                </div>
                                <div class="reply-content">${escapeHtml(reply.content)}</div>
                            </div>
                        `).join('')}
                    </div>
                ` : ''}
            </div>
        `;
    }).join('');
}

function initCloudMessageForm() {
    const form = document.getElementById('cloudMessageForm');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const content = document.getElementById('cloudMessageContent').value.trim();
        
        if (!content) {
            alert('请填写留言内容！');
            return;
        }
        
        if (!currentUserName) {
            alert('正在加载用户信息，请稍候...');
            return;
        }
        
        const now = new Date();
        const dateStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
        
        const newMessage = {
            name: currentUserName,
            content: content,
            date: dateStr,
            timestamp: now.getTime(),
            userId: currentUser ? currentUser.uid : ''
        };
        
        const messagesRef = window.FirebaseDatabase.ref(firebaseDB, 'messages');
        window.FirebaseDatabase.push(messagesRef, newMessage);
        
        form.reset();
        createFloatingEffect('🙏');
    });
}

let localMessages = [];

function loadLocalMessages() {
    const saved = localStorage.getItem('qingmingMessages');
    if (saved) {
        localMessages = JSON.parse(saved);
    } else {
        localMessages = [
            {
                id: 1,
                name: '胡氏后人',
                content: '愿先祖安息，保佑家族兴旺，子孙平安！',
                date: '2026-04-05 10:30'
            },
            {
                id: 2,
                name: '晚辈小明',
                content: '清明时节雨纷纷，缅怀先祖恩德深。愿先祖在天之灵安息！',
                date: '2026-04-05 11:20'
            },
            {
                id: 3,
                name: '远方亲人',
                content: '虽然身在他乡，心系故土。愿先祖保佑我们阖家幸福！',
                date: '2026-04-05 14:15'
            }
        ];
        saveLocalMessages();
    }
}

function saveLocalMessages() {
    localStorage.setItem('qingmingMessages', JSON.stringify(localMessages));
}

function renderLocalMessages() {
    const messagesList = document.getElementById('messagesList');
    
    if (localMessages.length === 0) {
        messagesList.innerHTML = '<div class="empty-messages">暂无留言，来做第一个留言的人吧！</div>';
        return;
    }
    
    messagesList.innerHTML = localMessages.map(msg => `
        <div class="message-item">
            <div class="message-header">
                <span class="message-author">${escapeHtml(msg.name)}</span>
                <span class="message-date">${msg.date}</span>
            </div>
            <div class="message-content">${escapeHtml(msg.content)}</div>
        </div>
    `).join('');
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function initMessageForm() {
    const form = document.getElementById('messageForm');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('messageName').value.trim();
        const content = document.getElementById('messageContent').value.trim();
        
        if (!name || !content) {
            alert('请填写姓名和留言内容！');
            return;
        }
        
        const now = new Date();
        const dateStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
        
        const newMessage = {
            id: Date.now(),
            name: name,
            content: content,
            date: dateStr
        };
        
        localMessages.unshift(newMessage);
        saveLocalMessages();
        renderLocalMessages();
        
        form.reset();
        
        createFloatingEffect('🙏');
    });
}

function initMessageTabs() {
    const tabs = document.querySelectorAll('.message-tab');
    const cloudPanel = document.getElementById('cloudMessages');
    const localPanel = document.getElementById('localMessages');
    const gitalkPanel = document.getElementById('gitalkMessages');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            const targetTab = tab.getAttribute('data-tab');
            
            cloudPanel.style.display = 'none';
            localPanel.style.display = 'none';
            gitalkPanel.style.display = 'none';
            
            if (targetTab === 'cloud') {
                cloudPanel.style.display = 'block';
            } else if (targetTab === 'local') {
                localPanel.style.display = 'block';
            } else {
                gitalkPanel.style.display = 'block';
            }
        });
    });
}

let worshipInitialized = false;
let currentWorshipData = { flowers: 0, candles: 0, incense: 0 };

function initWorship() {
    if (worshipInitialized) return;
    worshipInitialized = true;

    const flowerBtn = document.getElementById('flowerBtn');
    const candleBtn = document.getElementById('candleBtn');
    const incenseBtn = document.getElementById('incenseBtn');

    function updateDisplay() {
        document.getElementById('flowerCount').textContent = currentWorshipData.flowers || 0;
        document.getElementById('candleCount').textContent = currentWorshipData.candles || 0;
        document.getElementById('incenseCount').textContent = currentWorshipData.incense || 0;
    }

    if (window.FirebaseDatabase && firebaseDB) {
        const worshipRef = window.FirebaseDatabase.ref(firebaseDB, 'worship');

        window.FirebaseDatabase.onValue(worshipRef, (snapshot) => {
            const data = snapshot.val() || { flowers: 0, candles: 0, incense: 0 };
            currentWorshipData = data;
            updateDisplay();
        });

        if (flowerBtn) {
            flowerBtn.addEventListener('click', () => {
                currentWorshipData.flowers = (currentWorshipData.flowers || 0) + 1;
                window.FirebaseDatabase.set(worshipRef, currentWorshipData)
                    .then(() => {
                        createFloatingEffect('💐');
                    })
                    .catch((error) => {
                        console.error('更新失败:', error);
                    });
            });
        }

        if (candleBtn) {
            candleBtn.addEventListener('click', () => {
                currentWorshipData.candles = (currentWorshipData.candles || 0) + 1;
                window.FirebaseDatabase.set(worshipRef, currentWorshipData)
                    .then(() => {
                        createFloatingEffect('🕯️');
                    })
                    .catch((error) => {
                        console.error('更新失败:', error);
                    });
            });
        }

        if (incenseBtn) {
            incenseBtn.addEventListener('click', () => {
                currentWorshipData.incense = (currentWorshipData.incense || 0) + 1;
                window.FirebaseDatabase.set(worshipRef, currentWorshipData)
                    .then(() => {
                        createFloatingEffect('🙏');
                    })
                    .catch((error) => {
                        console.error('更新失败:', error);
                    });
            });
        }
    } else {
        currentWorshipData.flowers = parseInt(localStorage.getItem('flowerCount') || '0');
        currentWorshipData.candles = parseInt(localStorage.getItem('candleCount') || '0');
        currentWorshipData.incense = parseInt(localStorage.getItem('incenseCount') || '0');
        
        updateDisplay();

        if (flowerBtn) {
            flowerBtn.addEventListener('click', () => {
                currentWorshipData.flowers++;
                localStorage.setItem('flowerCount', currentWorshipData.flowers);
                updateDisplay();
                createFloatingEffect('💐');
            });
        }

        if (candleBtn) {
            candleBtn.addEventListener('click', () => {
                currentWorshipData.candles++;
                localStorage.setItem('candleCount', currentWorshipData.candles);
                updateDisplay();
                createFloatingEffect('🕯️');
            });
        }

        if (incenseBtn) {
            incenseBtn.addEventListener('click', () => {
                currentWorshipData.incense++;
                localStorage.setItem('incenseCount', currentWorshipData.incense);
                updateDisplay();
                createFloatingEffect('🙏');
            });
        }
    }
}

function createFloatingEffect(emoji) {
    const effect = document.createElement('div');
    effect.textContent = emoji;
    effect.style.cssText = `
        position: fixed;
        font-size: 3rem;
        pointer-events: none;
        z-index: 9999;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        animation: floatUp 2s ease-out forwards;
    `;

    const style = document.createElement('style');
    style.textContent = `
        @keyframes floatUp {
            0% {
                opacity: 1;
                transform: translate(-50%, -50%) scale(1);
            }
            100% {
                opacity: 0;
                transform: translate(-50%, -150%) scale(1.5);
            }
        }
    `;

    if (!document.querySelector('style[data-float]')) {
        style.setAttribute('data-float', 'true');
        document.head.appendChild(style);
    }

    document.body.appendChild(effect);
    setTimeout(() => effect.remove(), 2000);
}

function initGitalk() {
    const gitalkContainer = document.getElementById('gitalk-container');
    if (!gitalkContainer) return;

    const gitalk = new Gitalk({
        clientID: 'YOUR_CLIENT_ID',
        clientSecret: 'YOUR_CLIENT_SECRET',
        repo: 'YOUR_REPO_NAME',
        owner: 'YOUR_GITHUB_USERNAME',
        admin: ['YOUR_GITHUB_USERNAME'],
        id: location.pathname,
        distractionFreeMode: false,
        language: 'zh-CN'
    });

    gitalk.render('gitalk-container');
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }

            document.querySelectorAll('.nav-item').forEach(item => {
                item.classList.remove('active');
            });
            this.classList.add('active');
        });
    });
}

function initActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav-item');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initCarousel();
    renderAncestors();
    renderMemorialTimeline();
    initSmoothScroll();
    initActiveNav();
    initGitalk();
    initTouchSwipe();
    loadLocalMessages();
    renderLocalMessages();
    initMessageForm();
    initMessageTabs();
    initFirebase();
});

window.ancestorsData = ancestorsData;
window.familyTreeData = familyTreeData;
window.memorialTimelineData = memorialTimelineData;

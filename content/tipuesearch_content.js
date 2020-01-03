var tipuesearch = {"pages": [{'title': 'week', 'text': 'week2-5 \n week6-9 \n week10-14 \n week15-18 \n', 'tags': '', 'url': 'week.html'}, {'title': 'week2-5', 'text': 'week2 \n 創建github倉儲並且練習github指令 \n 1.創立並且加入課程倉儲git clone到近端上(至mde.tw中下載2019fall可攜套件)。 \n 2.使用git config --global user設定姓名、email、proxy。 \n 3.使用git submodule add 之指令建立目錄並取下子模組。 \n 4.輸入python -m pip install flask cors。 \n 5.當要開啟近端時必須要先進入cmsimde才能夠打上python wsgi.py指令，且開啟的隨身碟必須為正確的非虛擬的磁碟槽(如:d: or e:)才能夠開啟。 \n \n week3 \n Solvespace編譯 \n 1. Y:\\portablegit\\bin\\sh.exe 改名為 sh_rename_for_solvespace.exe。 \n 2.查驗github版本(2.13以上)。 \n 3. \xa0git clone\xa0 --recurse-submodules。 \n 4.編輯cmakelist內之713及714行(加入#字號)。 \n 5. cd solvespace>cd extlib>cd libpng>mkdir build>cd build。 \n 6.執行cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release mingw32-make。 \n 7.進行 \xa0libpng.dll.a 更名, 更名名為 libpng_static.a。 \n 8.回到 solvespace 原始碼目錄,建立 build 目錄後進入 build 目錄。 \n 9.在一次執行cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release mingw32-make。 \n \n week4 \n 錄影程式及字幕編輯軟件 \n 1.錄影可以使用 apowerREC \n \n 或者是 ShareX \n \n 2.編輯字幕可以使用學校網站的字幕編輯軟體 Aegisub ，運用音檔或者是影片檔配置字幕。 \n \n 3.若使用音檔則必須將影片和字幕檔結合，我選擇使用 Arctime \n \n 4.接下來要將浮水印印在影片左下角，使用 Video watermark 。 \n 課程的浮水印: \n \n week5 \n solvespace圖面繪製練習 \n 1.運用左方工作區繪製出長方形。 \n 2.點選線並且運用快捷鍵D標註尺寸如:長度40 寬度30。 \n 3.繪製長方形參照線，點選線後運用快捷鍵G即可以繪製出綠色參照線。 \n 4.繪製圓形孔，繪製完後四個孔之孔徑均不相同。 \n 5.按下兩孔並且用快捷鍵Q使其孔徑一致其他孔也是一樣方式。 \n 6.運用前述的快捷鍵D標註孔之尺寸。 \n 7.運用SHIFT加X使其拉伸並且輸入想要的厚度。 \n 8.若要看正視圖可以使用W，W判定的標準是以游標最接近的面去做正視。 \n 9.若要看到等角圖則可以使用F3使其回到等角圖的樣子。 \n 成品圖 \n \n 影片教學: \n \n 使用快捷鍵: \n sketch rectangle\xa0 (R) \n sketch line segment (S) \n sketch circle \xa0(C) \n constrain distance\xa0 (D) \n constrain angle  ( N) \n nearest isometric view\xa0 (F3)\xa0 \n align view to workplane (W)\xa0 \n equal length/radius/angle \xa0 (Q) \n extrude \xa0(shift+X) \n 常使用其他快捷鍵: \n sketh arc of a circle (A) \n sketh cubic bezier spline (B)   \n two line perpencudilar \xa0([) \n two line\xa0parallel\xa0 (L) \n two line symmetry \xa0 (Y) \n verticel \xa0(V) \n horizontal (H) \n same direction (X) \n split line (I) \n tangent arc (shift+A) \n benchmark (P) \n', 'tags': '', 'url': 'week2-5.html'}, {'title': 'week6-9', 'text': 'week6 \n 1.參數化零組件繪製二輪自走車 \n 1. 將solvespace打開 \n 2. 繪製輪胎及輪軸 \n (1)繪製一圓圈(使用指令c)作為輪胎 \n (2)運用New Group中的sketh in new workplace(快捷鍵為shift+w)進入草圖中所選定的基準面 \n (3)在草圖中運用上述C快捷鍵繪製一圓作為輪軸並且輸入其長度 \n (4)儲存零件等等作為組立時使用 \n 3. 繪製車身 \n (1)繪製車身本體，並且輸入其安裝輪軸時的長度及車身的長度和厚度 \n (2)車身前端必須做除料，繪製好要除料的部分之後用difference將該部位去除 \n (3)在車身兩個立面打上輪軸孔以便等一下安裝車軸 \n 4. 組立自走車 \n (1)將輪軸零件已在車身零件檔中開啟 \n (2)運用平行的功能將輪軸軸心與孔的軸心平行對準 \n (3)運用重和鍵將輪軸與孔重合 \n (4)重複(1)-(3)的步驟將另外一輪之輪軸組立起來 \n 操作影片 : \n \n 成品圖: \n \n 2.網際 V-rep 模型控制: \n 1.將mde.tw中的task1打開，並且下載其中的 V-rep 3.6.1 rev 4.7z 壓縮檔和網際 V-rep 模型控制: web_vrep2.zip (local) \n 2.將隨身碟中start_mdecourse打開並且在其中輸入regedit \n 3.打上regedit後會將登錄編輯程式打開，按下第一個HKEY_CLASSES_ROOT並用編輯中的尋找，尋找.py \n 4.再找到路徑.py_auto_file/shell/edit/command \n 5.將.py這個機碼和其子機碼刪除(包刮py_auto_file) (若尋找時找不到.py之資料夾,則1到5點可以不做) \n 6.從下載下來的web_vrep2中app.py用編輯器開啟 \n 7.從下載下來的路徑V-REP3\\V-REP_PRO_EDU中找到vrep.exe \n 8.用v_rep中的file的open scene將下載下來的web_vrep2中two_wheeler.ttt打開 \n 9.剛剛編輯器開啟之app.py使用編輯器的tool中的go將其控制器開啟 \n 10.使用 localhost: 5000 將控制器開啟 \n 11.運用控制器的前後左右測試是否可以控制車子 \n 12v-rep必須要將右上方開始鈕按下 \n 操作影片: \n \n 3. 新增啟動與停止按鈕: \n 1.將mde_course打開 \n 2.用編輯器開啟 templates 中的 controls.html \n 3.在第19行打上從下方向左按鈕指令複製來的指令並且將其改寫成start和stop \n 4.因為有start和stop兩個按鈕所以必須要放置兩行指令 \n 指令: <td><a class="pure-button pure-button-primary" href="/do/start">start</a></td><a class="pure-button pure-button-primary" href="/do/stop">stop</a></td> \n 5.結束後儲存並且用上方tool中的go測試是否已將按鈕放入 \n 6.用編輯器開啟 vrep_linefollower 定義其中開始和結束按鈕 \n 指令: if direction == \'start\':  vrep.simxStartSimulation(self.clientID, vrep.simx_opmode_oneshot)  elif direction == \'stop\':  vrep.simxStopSimulation(self.clientID, vrep.simx_opmode_oneshot)  else : \n 7.到課程網站中的老師倉儲中尋找issue \n 8.其中有一項issue為置入start和stop按鈕的指令 \n 9.複製並且依照影片中將其貼上 \n 10.在每行指令前定義好所需的指令例如:(if else elif) \n 11.打開 vrep.exe 並且用編輯器打開 app.py 並執行tool中的go \n 12.測試是否有成功運行 \n 操作影片: \n \n week7 \n (1).solvespace編譯-更改HELP中ABOUT的VERSION \n 1.開啟solvespace.cpp找到952行在solvespace後方加上compiled by 自己的學號 \n 2.刪除舊的這個路徑中201906_fall\\tmp\\solvespace\\build\\src\\CMakeFiles的 \n solvespace.cpp.obj檔，此檔案若無刪除solvespace就只會讀取這個舊有的檔案 \n 3.進入solvespace資料夾中的這個資料夾用指令cd build \n 4.在黑窗中打上mingw32-make \n 5.開啟solvespace \n 6.在help中的about是否有compiled by 自己學號 \n 操作影片: \n \n (2.)solvespace繪圖驗證 \n 第1題 \n 操作影片: \n \n 成品圖: \n \n 第3題 \n 操作影片: \n \n 成品圖: \n \n 第4題 \n 操作影片: \n \n 成品圖: \n \n 第6題 \n 操作影片: \n \n 成品圖: \n \n 第7題 \n 操作影片: \n \n 成品圖: \n \n 第8題 \n 操作影片: \n \n 成品圖: \n \n 第9題 \n 操作影片: \n \n 成品圖: \n \n 第10題 \n 操作影片: \n \n 成品圖: \n \n 第11題 \n 操作影片: \n \n 成品圖: \n \n 第12題: \n 1.繪製長方形形狀的本體 \n 2.繪製上方左右兩片圓柱形特徵 \n 3.連接兩片圓柱型特徵 \n 4.挖除中央圓型孔洞 \n 5.下方圓型柱也以一樣的方式繪製並且若出現紅色部分則可以使用 右上視窗的force nurbs surfaces to triangle鈕消除錯誤 \n 操作影片: \n \n 成品圖: \n \n 第13題: \n 1.繪製梯形形狀的本體 \n 2.繪製上方兩片梯形特徵 \n 3.挖除梯形特徵上的槽孔 \n 4.繪製底部圓柱若出現紅色部分則使用右上方視窗assemble按鈕 \n 5.挖除中央圓孔若出現紅色部分使用右上視窗的force nurbs surfaces to triangle鈕 \n 操作影片: \n \n 成品圖: \n \n 第14題 \n 操作影片: \n \n 成品圖: \n \n 第15題 \n 操作影片: \n \n 成品圖: \n \n 第16題 \n 1.將solvespace打開 \n 2.繪製本體外徑為5.75厚度為1.5的圓 \n 3.轉到主要工作平面並且移除一外徑為5.25厚度為1.25的圓型孔 \n 4.轉到主要工作平面，繪製一外徑為3.5的參考圓並且在其影片提到之位置會上4組具有外徑1厚度為0.25且中央有一0.5孔之特徵 \n 5.轉到主要工作平面移除中央外徑4.25之圓型孔 \n 6.轉到主要工作平面繪製8個外徑為0.5的圓型孔所有大小可以使用快捷鍵G使其一致 \n 操作影片: \n \n 成品圖: \n \n 第17題 \n 操作影片: \n \n 成品圖: \n \n 第18題 \n 操作影片: \n \n 成品圖: \n \n week8 \n 1.建立webot開啟檔案: \n (1)將mde.tw中的 Webots_2019b_rev1.7z \n (2)將start_mdecourse.bat檔複製一份並且貼上 \n (3)將 start_mdecourse.bat名稱更改為start_mdecourse -webot.bat檔 \n (4)依照影片把這行指令貼入path_webots=%Disk%:\\Webots_2019b_rev1\\msys64\\mingw64\\bin;%Disk%:\\Webots_2019b_rev1\\msys64\\usr\\bin \n (5)確定路徑是正確的webot檔案應該在Y:\\201906_fall\\data中 \n (6)開啟webot開啟檔也就是start_mdecourse -webot.bat \n (7)開啟webot中的open sample world測試是否可以導入 \n 操作影片: \n \n 2.開啟網誌: \n (1)將leo edit開起來 \n (2)將config中的pelican.leo丟入leo edit裡面 \n (3)修改影片中有講的路徑中的siteurl更改成自己blog網址 \n (4)依照影片中的步驟將指令複製並在黑窗中執行 \n 操作影片: \n \n 3.以ssh對github連線: \n (1)到y槽的portablegit將sh_for_solvespace檔案複製並修改成sh.exe \n (2)進入黑窗輸入sh和 ssh-keygen -t rsa -b 4096 -C "使用者學號" \n (3)下載putty連線工具箱並利用其中的putty.gen創建兩把金鑰 \n (4)修改啟動器中的指令 \n set GIT_HOME=%Disk%:\\portablegit\\bin\\\nset GIT_SSH=%Disk%:\\putty\\plink.exe (5) 進入config中更改指令 url = git@github.com:mdecourse/cad2019.git 在mdecourse的地方要改成自己的學號 \n (6)開啟putty.exe進去設定github.com和proxy位置其中ssh中的auth的地方必須選取剛剛創建的金鑰 \n (7)用編輯器複製課程網站中的step6指令並且儲存放入.ssh資料夾之中 \n (8)進入github並且在setting中的ssh將金鑰開啟並複製放入金鑰設置處 \n 操作影片: \n \n week9 \n 期中影片報告: \n \n', 'tags': '', 'url': 'week6-9.html'}, {'title': 'week10-14', 'text': 'week10 \n 由組長建立分組網站並且請組員加入分組網站 \n 1.由組長創建 分組網站 https://s40723221.github.io/cad2019bg2/content/index.html 和 分組倉儲 https://github.com/s40723221/cad2019bg2 \n 2.由組員透過fork加入創建之分組網站 \n 3.加入後用git\xa0 clone submodules 組別倉儲網址\xa0 \n 4.以git pull request的方式進行推送(必須由組長認證推送內容才可以成功推送) \n 5.閱讀nx12及nx3的操作手冊和教程 \n 操作影片: \n \n nx12下載的方式與利用virtual box開啟方式 \n nx12及nx3下載點和資料參考點(下載必須要使用虛擬主機板本):\xa0 http://mde.tw/cad2019/content/NX.html   \n VirtualBox下載點:\xa0 https://briian.com/5690/ \n 操作影片: \n \n 繪圖軟體安裝及基本設定 \n nx12及nx3下載點和資料參考點:\xa0 http://mde.tw/cad2019/content/NX.html   \n solidwork下載點和資料參考點: \xa0 http://mde.tw/cad2019/content/Solidwo... \n  VirtualBox下載點:\xa0 https://briian.com/5690/ \n  pro/e官方網站:\xa0 https://www.ptc.com/en/products/cad/p...   \n pro/e試用版載點: \xa0 https://www.ptc.com/tw/products/cad/c...   \n inventor試用版載點: \xa0 https://www.autodesk.com/products/inv...   \n autodesk 官方網站:\xa0 https://www.autodesk.com.tw/ \n 操作影片: \n \n week12 \n 組員個別整理電子書內容 \n 參考NX設計電子書第四章內容 :\xa0 http://mde.tw/cad2019/downloads/NX-12-for-Engineering-Design.pdf \n CH4 \n 本章討論的是NX12的3D建模基礎教學，NX12如同其他的繪圖軟體同樣也可以透過左邊的歷史紀錄去更改之前的零件尺寸，本章節也會介紹一些常見的功能，像是長出、旋轉繞形、取線的修剪、圓柱體和圓錐體等圖形的繪製。 \n 4-1功能類型 \n 功能類型包括了六種:圖形、特徵的參照、特徵的掃描、刪除特徵功能、提取功能、自訂義功能。 \n (如下圖所示:可以在NX12的介面處右方下拉箭頭挑選常用的功能) \n \n 4.1.1圖元 \n 這些功能列表可以得到如:方塊或者是圓柱體、錐形、球體等圖形，並且讓使用者可以後續再做其他的建模。 \n 4.1.2參照功能 \n 可以用下列圖片中的功能來創建參考點或者是參考軸、參照平面、參照座標方便去定義其他的圖形位置。 \n \n 4.1.3掃描功能 \n 在NX左方的MENU功能表中的insert(插入)中design feature(設計特徵)的功能達到如同:長出、旋轉繞形、延曲線掃描、掃描混成等功能。 \n 4.1.4刪除特徵功能 \n 如上圖所示可以使用:如同孔、鍵座、凹槽等等切除特徵的功能都可以從上圖中找到。 \n 4.1.5提取特徵功能 \n 1.在NX12中提取特徵的功能有如同:薄殼、位移特徵、加厚特徵等功能。 \n 2.在NX左方的MENU功能表中的insert(插入)中的associative copy中的extract geometry(提取幾何或複製幾何)可以複製一個實體(該實體由多個特徵集合而成)。 \n 3.在NX左方的MENU功能表中的insert(插入)中的offset/scale(位移/比例)中，可以看到位移、薄殼、增加厚度的功能。 \n 4.在NX左方的MENU功能表中的insert(插入)中的surface(面)中，可以看到曲線及曲面的繪製功能在功能表的此處。 \n 4.1.6自訂義功能 \n 在NX左方的MENU功能表中的insert(插入)中的design feature中的user defined可以自訂義自己想要的介面功能。 \n 零組件繪製: \n 1. 繪製錐形軸 :sketch選取平面>選取好平面後繪製草圖中的圓形(直徑為4 (inch)>利用extrude(長出)(高度為18 (inch)>點選insert中的design feature中con(錐體)並且選取直徑和Z軸>在base diameter中輸入4 (inch)、top diameter中輸入6 (inch)、height中輸入10 (inch)>在錐體直徑較大的一端繪製一(直徑為6)和一(高度為20)的圓柱體點擊ok就完成了。 \n 操作影片: \n \n 2 .繪製葉輪 :sketh選取平面>點選menu中的insert中的direct sketch>創建兩個point其座標分別是(0,0,0)及(11.75,6,0)>使用arc(弧線)繪製如影片中的形狀>使用insert裡面的design feature 中的con(錐體)並且記得要將放置點設置於座標(14,0,0)的位置>設置錐體尺寸 base diameter ( 底部直徑 )=15 、 Top Diameter( 頂部直徑 ) = 8 、 Height( 高度 ) = 16.25> 利用長出將剛剛繪製好的葉輪草圖長出實體 ( 厚度為 12)> 利用 insert> Associative Copy>Pattern Feature( 陣列 )> 數量為五個分布角度為 72 度點擊 ok 就完成了。 \n 操作影片: \n \n 3. 繪製底座箱體: sketh選取平面>先繪製立面和立面上的斜邊特徵>繪製左邊圓型特徵(以旋轉長出的方式繪製)>挖除圓形孔>繪製長在圓形孔內的特徵(包括圓柱體及四邊長方體)>將內部小圓柱體的螺紋補上(螺紋的小徑為0.395)>在左方圓柱體的上方加上3個半圓特徵並且在上方打上小孔>將右方的平面補上並且在上面打上小孔>在兩個小孔中也必須繪製螺紋(螺紋的小徑為0.395)>繪製上方的斜形肋特徵>繪製完之後檢查一下是否正確就完成了。 \n 操作影片: \n \n webot tutorial - 1 \n 1.先創建儲存檔案的資料夾 \n 2.創建一個新生成的世界 \n 3.創建好之後先用加號加入一個木箱並更改其尺寸 \n 4.添加完成了之後我們要複製並貼上木箱直到場面上有三個木箱 \n 5.添加e-puck robot並且啟動試試看是否可以運動 \n 6.增加控制器操縱e-puck robot添加指令後機器人應該會直走並旋轉後停下 \n 7.修改這個控制器的功能貼上另一個指令如果成功機器人因該會緩慢行走 \n 8.修改機器人馬達的動力使其達到原地旋轉 \n 操作影片: \n \n \n v-rep tutorial - bubbleRob \n 1.創建一個圓球當作機器人的本體 \n 2.將感測器設置好並裝上機器人然後去定義其範圍 \n 3.將左輪裝上並且把座標調整到適當的位置，調整完之後將參數都設置好 \n 4.調整好之後我們需要裝上右輪此時可以使用複製貼上的方式裝上去 \n 5.裝好之後因為機器人無法單靠兩輪站立我們需要增加第三個支點 \n 6.增加一個小球當作機器人的支點 \n 7.增加動力源並且設置好動力源的座標 \n 8.左右輪也必須加上馬達當作動力源 \n 9.設定都好了之後記得要將剛剛設定的東西都拉到bubbleRob底下才會跟著本體作動 \n 10.設定障礙物將本體圍繞起來 \n 11.設定運動時的動態圖表 \n 12設定攝像頭以便機器人移動時看到與他平行的影像 \n 13.將BubbleRob的程式碼功能打開並且將程式碼複製貼入到裡面 \n 14.正常狀態下機器人因該會在感測器照射到物體的情況下往後退並迴避 \n 操作影片: \n \n week13 \n 第13周之前的內容報告 \n \n webots 所有 tutorial : \n tutorial 1 \n tutorial 1 : https://cyberbotics.com/doc/guide/tutorial-1-your-first-simulation-in-webots \n 1.先創建儲存檔案的資料夾 \n 2.創建一個新生成的世界 \n 3.創建好之後先用加號加入一個木箱並更改其尺寸 \n 4.添加完成了之後我們要複製並貼上木箱直到場面上有三個木箱 \n 5.添加e-puck robot並且啟動試試看是否可以運動 \n 6.增加控制器操縱e-puck robot添加指令後機器人應該會直走並旋轉後停下 \n 7.修改這個控制器的功能貼上另一個指令如果成功機器人因該會緩慢行走 \n 8.修改機器人馬達的動力使其達到原地旋轉 \n 操作影片: \n \n tutorial 2 \n tutorial 2 網址: https://cyberbotics.com/doc/guide/tutorial-2-modification-of-the-environment \n 1.將之前的模擬另存成新的檔案 2.將之前建立的場地刪除 3.自己新增一個新的場地並且更改大小 4.開始創建球體按照影片新建好節點 5.更改好球體的位置及座標 6.為各個節點作命名以便後面可以使用def use機制做設定 7.學習使用def use機制創建並且設定四面圍繞場地的牆壁 8.創建新的牆壁節點並且和球體一樣對節點命名(不可以設定物理節點否則牆壁在模擬時會掉落) 9.調整好位置後即可以做另外三面牆壁 10.完成後開始模擬確定是否可以正常啟用 \n 操作影片: \n \n tutorial 3 \n tutorial 3 網址: https://cyberbotics.com/doc/guide/tutorial-3-appearance \n 1.將之前的模擬打開並且另存新模擬 2.將牆壁的外觀節點打開 3.將顏色的部分調成藍色 4.更改球體的材質外觀 5.打開球體的外觀節點 6.將影片中的路徑打開並把檔案導入 7.成功的話球體會變成類似磚塊的外觀 8.打開view中的感測器範圍功能 9.打開後就可以觀測到感測器的範圍 10.檢查後若模擬都沒問題就ok了 \n 操作影片: \n \n tutorial 4 \n tutorial 4 網址: https://cyberbotics.com/doc/guide/tutorial-4-more-about-controllers \n 1.將之前的模擬打開並另存一個新的模擬 2.為機器人新增一個新的控制器編輯器 3.將 webots 官方中的指令複製下來並且貼入編輯器中 4.將程式導入機器人的控制器節點中 5.存檔並且重新啟動模擬 6.開始模擬現在機器人因該會自動避開障礙物 7.如果模擬沒問題那就ok了 \n 操作影片: \n \n tutorial 5 \n tutorial 5 網址: https://cyberbotics.com/doc/guide/tutorial-5-compound-solid-and-physics-attributes \n 1.將之前的模擬打開並且另存新模擬 2.一樣串建solid實體節點 3.在children節點下必須要先創建group節點 4.按照之前的步驟創建啞鈴形狀的物體(在 webots tutorial 中有流程圖) 5.創建完成之後調整座標位置和擺放的角度 6.完成之後設定啞鈴的質量大小和摩擦力 7.嘗試模擬看看如果沒問題就ok了 \n 操作影片: \n \n tutorial 6 \n tutorial 6 網址: https://cyberbotics.com/doc/guide/tutorial-6-4-wheels-robot \n 1.將場地上的物體，都刪除只留下牆面和場地 2.開始新增車子(按照上個tutorial的方式新建) 3.車子的創造節點流程圖可以在官網中找到 4.創建完成車體和第一顆輪胎後先設定第一顆輪胎的馬達轉軸軸向 5.完成設定之後緊接著創建其他三顆輪胎(記得軸向都要改變) 6.完成之後就可以設定馬達的名稱了(名稱必須要正確不然程式會抓不到) 7.開始設定感測器 8.感測器使用的是distance sensor距離感測器 9.設定完後必須要建立感測器的實體並且更改其位置和座標 10.感測器在設定位置時 x軸項必須要朝車體的前方才能正確感測 11.完成之後車子因該會自動避開障礙物 12.確定可以正確模擬後就ok了 \n 操作影片: \n', 'tags': '', 'url': 'week10-14.html'}, {'title': 'proe開發緣起', 'text': '\n pro-e是Pro/Engineer的簡稱，更常用的簡稱是ProE或Pro/E，Pro/E是美國參數技術公司（Parametric Technology Corporation，簡稱PTC）的重要產品，在目前的三維造型軟件領域中佔有著重要地位。 \n pro-e作為當今世界機械CAD/CAE/CAM領域的新標準而得到業界的認可和推廣，是現今主流的模具和產品設計三維CAD/CAM軟件之一。 \n Pro/ENGINEER在2010年8月改名為「 Creo Elements/Pro 」 \n 2011年6月再改名為「 Creo Parametric 」 \n 主要特性 :\xa0 \n Pro/E第一個提出了 參數化設計 的概念，並且採用了單一數據庫來解決特徵的相關性問題。另外，它採用模塊化方式，用戶可以根據自身的需要進行選擇，而不必安裝所有模塊。 Pro/E的基於特徵方式，能夠將設計至生產全過程集成到一起，實現並行工程設計。它不但可以應用於工作站，而且也可以應用到單機上。 \n Pro/E採用了模塊方式，可以分別進行 草圖繪製 、 零件製作 、 裝配設計 、 鈑金設計 、 加工處理 等，保證用戶可以按照自己的需要進行選擇使用。 \n 1.參數化設計 \n 相對於產品而言，可以把它看成幾何模型，而無論多麼複雜的幾何模型，都可以分解成有限數量的構成特徵，而每一種構成特徵，都可以用有限的參數完全約束，這就是參數化的基本概念。 \n 2.基於特徵建模 \n Pro/E是基於特徵的實體模型化系統，工程設計人員採用具有智能特性的基於特徵的功能去生成模型如腔、殼、倒角及圓角，您可以隨意勾畫草圖，輕易改變模型。這一功能特性給工程設計者提供了在設計上從未有過的簡易和靈活，特別是在設計系列化產品上更是有得天獨到的優勢 \n 3.單一數據庫 \n Pro/Engineer是建立在統一基層上的數據庫上，不像一些傳統的CAD/CAM系統建立在多個數據庫上。所謂 單一數據庫 ，就是工程中的資料全部來自一個庫，使得每一個獨立用戶在為一件產品造型而工作，不管他是哪一個部門的。換言之，在整個設計過程的任何一處發生改動，亦可以前後反應在整個設計過程的相關環節上。例如，一旦工程詳圖有改變，NC（數控）工具路徑也會自動更新；組裝工程圖如有任何變動，也完全同樣反應在整個三維模型上。這種獨特的數據結構與工程設計的完整的結合，使得一件產品的設計結合起來。這一優點，使得設計更優化，成品質量更高，產品能更好地推向市場，價格也更便宜。 \n 4.直觀裝配管理 \n Pro/ENGINEER的基本結構能夠使您利用一些直觀的命令，例如“貼合”、“插入”、“對齊”等很容易的把零件裝配起來，同時保持設計意圖。高級的功能支持大型複雜裝配體的構造和管理，這些裝配體中零件的數量不受限制。 \n 5.易於使用 \n 菜單以直觀的方式聯級出現，提供了邏輯選項和預先選取的最普通選項，同時還提供了簡短的菜單描述和完整的在線幫助，這種形式使得容易學習和使用。 \n *歷史版本 \n \n \n \n Pro/ENGINEER Release 1.0 \n 1 \n 1987年 \n \n \n Pro/ENGINEER Release 8.0 \n 8 \n 1991年 \n \n \n Pro/ENGINEER Release 9.0 \n 9 \n 1992年 \n \n \n Pro/ENGINEER Release 10.0 \n 10 \n 1993年 \n \n \n Pro/ENGINEER Release 11.0 \n 11 \n 1993年 \n \n \n Pro/ENGINEER Release 12.0 \n 12 \n 1993年 \n \n \n Pro/ENGINEER Release 13.0 \n 13 \n 1994年 \n \n \n Pro/ENGINEER Release 14.0 \n 14 \n 1994年 \n \n \n Pro/ENGINEER Release 15.0 \n 15 \n 1995年 \n \n \n Pro/ENGINEER Release 16.0 \n 16 \n 1996年 \n \n \n Pro/ENGINEER Release 17.0 \n 17 \n 1997年 \n \n \n Pro/ENGINEER Release 18.0 \n 12 \n 1997年 \n \n \n Pro/ENGINEER Release 19.0 \n 19 \n 1998年 \n \n \n Pro/ENGINEER Release 20.0 \n 20 \n 1998年 \n \n \n Pro/ENGINEER 2000i \n 21 \n 1999年 \n \n \n Pro/ENGINEER 2000i2 \n 22 \n 2000年 \n \n \n Pro/ENGINEER 2001 \n 23 \n 2001年 \n \n \n Pro/ENGINEER Wildfire \n 24 \n 2002年 \n \n \n Pro/ENGINEER Wildfire 2.0 \n 25 \n 2004年 \n \n \n Pro/ENGINEER Wildfire 3.0 \n 27 \n 2006年 \n \n \n Pro/ENGINEER Wildfire 4.0 \n 29 \n 2008年 \n \n \n Pro/ENGINEER Wildfire 5.0 \n 31 \n 2009年 \n \n \n Creo Elements/Pro 5.0 （M065） \n 31 \n 2010年10月 \n \n \n Creo Parametric 1.0 \n 32 \n 2011年6月11日 \n \n \n Creo Parametric 2.0 \n 33 \n 2012年4月9日 \n \n \n Creo Parametric 3.0 \n 34 \n 2014年6月17日 \n \n \n Creo Parametric 4.0 \n 35 \n 2016年12月15日 \n \n \n \n', 'tags': '', 'url': 'proe開發緣起.html'}, {'title': 'solidwork開發緣起', 'text': '\n 1993年 \n 創始人 Jon Hirschtick 招募了一個工程師團隊，旨在使3D CAD軟體更容易上手。Hirschtick從廣受好評的麻省理工學院二十一點隊的成員中籌得100萬美元，開始了他的新事業。該團隊的目標是構建一個基於 Windows平台 的易於使用且價格合理的軟體。這在當時真的是革命性的存在，當時所有其他流行的CAD系統都是在 Unix上構建 的。經過幾年的開發，最初發布的SolidWorks終於來了。 \n 1995年 \n 1.與其他CAD系統的18,000美元相比，SolidWorks的售價 僅為4,000美元 。 \n 2.該軟體更易於使用：與市場上其他CAD軟體相比，用戶只需 3個月 的使用經驗就可以輕 \n 3.鬆上手。易用性的很大一部分原因在於它採用了現代著名的Windows介面。 \n 4.模型的可視化是前所未有的。在光線充足的陰影環境中的構建功能與傳統建模空間形成 \n 5.鮮明對比，傳統建模空間僅顯示黑色背景下的線框。 \n 6.我們現在熟悉的類似 FeatureManager 用於顯示模型的構建歷史。 \n 7.零件，組件和圖紙從一開始就可用。用戶無法在組件中應用配合，但仍可將組件放置到位。 \n \n 1996年 \n 1.介紹了上下建模。允許使用自上而下的裝配建模方法。 \n 2.用戶現在可以在裝配中使用配合併捕捉動態裝配運動。除了干擾檢測，用戶還可以更輕 \n 3.鬆地驗證形狀，適合度和功能。 \n 4.拖放功能可將一個裝配體零部件移動到另一個裝配體中。 部分配置。 \n 5.自動化物料清單。只有一種方法沒有自定義選項，但它很有效。 \n 1997年 \n 1.鈑金功能首次發布。 \n 2.標準庫功能推出。 \n 3. Loft 功能現在可以使用引導曲線。 \n 4. SolidWorks \xa0 被 \xa0 Dassault Systemes （達索公司）收購。 \n 1997年二次修改 \n 1.面部圓角介紹。 \n 2.裝配配置。 \n 3.完全可定製的組件爆炸視圖。 \n 4.SolidWorks Viewer作為免費產品推出，可與非CAD用戶共享設計，並在與外部方共享 \n 5.數據時保護智慧財產權。 \n 1998年 \n 1.已發布功能面板，現在與設計庫的功能類似。可以拖放到模型上的預製功能。 \n 2.草圖診斷可幫助用戶理解草圖不適用於特定特徵的原因。 \n 3. Lofts 和 Sweeps 的相切控制。 \n 4.組合件封包(Assembly Envelopes)。 \n \n 1998二次修改 \n 1.智能配合在建造組件中更多地使用拖放式自動化。 \n 2.隨著用戶不斷建造越來越大的組件，輕量級組件可以幫助提高性能。 \n 3.表面處理工具首次推出。 \n 4 .FeatureWorks 用於導入文件，能夠更有效地使用來自其他軟體的現有3D數據。 \n 5.首次 CSWP 考試發布。它是手寫的，並通過郵件發送。 \n 1999年 \n 1. Palm Springs 的第一個SolidWorks World。 \n 2.拖動組件時對組件的實時碰撞檢測。 \n 3.3D草圖介紹。 \n 4.管道模塊發布。 \n 5.2D命令模擬器有助於縮小與以前AutoCAD用戶的差距。 \n 2000年 \n 1.發布 eDrawings 。 \n 2.實現了 Hole Wizard 接口。 \n 3.表面處理更有用，能夠編織，修剪和延伸表面。 \n 4.SolidWorks Explorer。 \n 5.動態間隙檢測可驗證裝配部件之間的最小間隙。 \n 2001年 \n 1.鏡像組件中的組件。 \n 2.引領互動。以前，在任何CAD系統中，只要選擇了命令，軟體就會在模型頂部顯示整個 \n 3.對話框。SOLIDWORKS開始廢除這一點，並轉向我們現在知道的 \n 4.PropertyManagers，並將陰影標註返回到模型。 \n 5.現在允許靈活的子組件進一步捕捉準確的裝配運動。 \n 6.介紹填充表面命令。 \n 7.DXF / DWG導入嚮導發布。 \n 8.3D Meeting（3D會議），最終在幾個版本之後退出。利用Microsoft Live Meeting並允許與螢幕共享進行實時同步會議。 \n 2001年二次修改 \n \n 1.運動模擬功能現在可以捕捉組件中移動的組件的實際物理動態。 \n 2.介紹大型裝配模式。 \n 3.實現了2D到3D轉換工具，以便將2D CAD數據輕鬆轉換為功能齊全的3D模型。 \n 4.介紹SolidWorks \xa0 Office，將常用的插件如 PhotoWorks ， Toolbox ， Utilities 和 \n 5.FeatureWorks打包成一個產品。 \n 6.Dassault Systemes收購了SRAC並開始將仿真引入主流設計流程。 \n 2003年 \n 1. COSMOSXpress 是第一款 Xpress 產品，它為每個桌面帶來了簡單的零件驗證。 \n 2.3DContentCentral為用戶提供了一個交互和共享模型的社區。 \n 3.多體零件設計。這是一個非常大的問題，現在是焊接，鈑金和模具設計的基礎。 \n 4.收購了 PDMWorks 並引入了SolidWorks Office Professional軟體包。開始將PDM作為 \n 5.每個客戶提供的一部分。 \n \n 2004年 \n 1.介面更新，包括 CommandManager ，彈出FeatureManager和PropertyManager和 \n 2.ConfigurationManager的管理器視圖選項卡。 \n 3.介紹了 Mold Tools （模具工具）和 Weldments （焊件）。 \n 4.實施Auto Balloon命令以匹配物料清單物料編號中的balloon編號。 \n 5.限制配合以捕捉更複雜的裝配運動。 \n 6.推出了 RealView Graphics ，以便隨時提供更逼真的圖像。 \n \n 2005年 \n 1.繪圖比較，為用戶提供工具來比較兩個圖紙之間的變化。 \n 2 .Flex 功能。 \n 3.電氣布線，與管道布線一起使用。 \n 4.在圖紙中自動標註，以捕捕捉模型中已定義的尺寸。 \n 5.能夠繪製無限的線條。 \n 6.SolidWorks Rx發布，旨在提供幫助技術支持更好地去識別問題。 \n \n 2006年 \n 1.發布 Smart Components 功能，允許為硬體之類的物件安裝智能裝配組件。 \n 2.介紹填充圖案。 \n 3.介紹草圖塊。 \n 4.顯示狀態。 \n 5.設計檢查器，允許用戶根據公司標準動態檢查他們的模型。 \n 6.添加了相機視圖功能。 \n 7.發布SolidWorks Office Premium（白金版）軟體包，包括 Routing ， COSMOSWorks8 .和 \xa0 COSMOSMotion 進行模擬，以及 ScanTo3D 。 \n \n 2007年 \n 1. SWIFT 工具可幫助設計人員在提供自動化解決方案時動態了解模型存在問題或錯誤的原因。 \n 2.可在組件中使用皮帶，鏈條和齒輪功能。 \n 3.用於表面處理的自由形式命令。 \n 4.介紹 Enterprise PDM 。 \n 2008年 \n 1.使用新的菜單欄和 CommandManager 布局對用戶介面進行全面檢修和現代化優化。上 \n 2.下工具欄和快捷工具欄首次可用。所有這些介面組件現在都可以完全自定義。 \n 3.Instant3D，提供拖動和操縱幾何體的功能，可輕鬆測試不同的設計概念。 \n 4.發布 TolAnalyst 。 \n 5.設計剪貼畫，通過剖析現有數據以便在另一個模型中重複使用，可以更輕鬆地重用現有的2D和3D數據。 \n 6.推出 DriveWorksXpress 和 DFMXpress 。 \n \n 2009年 \n 1.PhotoView360圖像渲染作為第一個渲染器引入，以訪問處理器的多核功能。 \n 2. SpeedPak 現在可用於簡化裝配中的組件。 \n 3.為追求更高目標，所以引入傳感器。 \n 4. CircuitWorks 發布並添加到SolidWorks Office Premium（白金版）軟體包中。 \n 5.發布 3DVIA Composer 。 \n 2010年 \n 1.現在提供可持續發展方案，幫助用戶了解其設計對環境的影響。 \n 2.快速標註尺寸使得創建細節圖更加容易。 \n 3.介紹基於事件的運動模擬。 \n 4.首次提供滑鼠手勢快捷鍵。 \n 5.現在可以進行多體鈑金建模。 \n \n 2011年 \n 1.PhotoView360完全集成到SolidWorks介面中。 \n 2.現在可以使用Walk-through（走查）功能。 \n 3.引入了 Defeature 工具以幫助限制模型中的智慧財產權數量。 \n 4.現在可以在 Simulation 中使用平面簡化。 \n 5.自動排列圖紙中的尺寸。 \n 2012年 \n 1.方程式編輯器經過徹底檢修後，更加用戶友好。 \n 2.介紹 Large Design Review 。 \n 3. Feature Freeze 現在可以讓用戶更好地控制性能。 \n 4.鈑金增強：邊線法蘭的更多選擇，引入掃描法蘭，使用的成型工具更加人性化。 \n 5.發布成本計算加載項。 \n 2013年 \n 1. View Orientation 有一個對話框，不再只是在工具欄上了。還引入了選擇器多維數據集 \n 2.以及保存視圖功能以便之後使用。 \n 3.以前的版本文件互操作性：2013文件現在可以在2012 SP5中打開。 \n 4.介紹 Conic 草圖實體。 \n 5.相交功能。 \n 6. Customer Portal （客戶門戶網站）上提供了 CAD Admin Dashboard （CAD管理員儀錶板）。 \n \n 2014年 \n 1.能夠通過上下工具欄快捷方式添加標準配合。 \n 2.替換草圖實體使用戶能夠用新的實體替換舊實體並仍然維護下游引用。 \n 3.推出了鈑金中的 Lofted Bend 功能。 \n 4.能夠創建 Conic Fillets （圓錐倒角）。 \n 5.樣式樣條草圖命令。 \n 6.自動縮放第一個草圖。現在，在草圖上創建第一個維度時，所有實體都會自行調整大小 \n 7.以進行縮放。 \n 8.能夠配置結構成員配置文件。現在允許配置輪廓草圖，這大大改變了需要組織的文件數量。 \n 9.MySolidWorks作為能夠提供自學培訓以及所有SolidWorks的在線資源社區發布。 \n 2015年 \n 1.動態參考可視化，幫助用戶了解父/子關聯。 \n 2.引入了選擇集，以便於重複使用幾何選擇組合。 \n 3.能夠直接從SolidWorks進行3D列印。 \n 4.Simulation中的疲勞分析。 \n 5.Profile center mate（輪廓中心配合）。 \n 6.發布 SolidWorks MBD 。 \n \n 2016年 \n 1.用戶介面重新設計，包括更好地支持高解析度顯示器。 \n 2.藍色/灰色盤默認採用傳統配色方案。 \n 3.引入了選擇麵包屑，使相關命令更易於訪問。 \n 4.實現 Mate Controller 工具，以更加可訪問的方式捕捉裝配定位。 \n 5.能夠全局替換失敗的配合實體。 \n 6.介紹 Thread 功能。 \n 7.發布 PDM Standard （標準版）並添加到SolidWorks Professional專業版軟體包中。 \n 8.SolidWorks Visualize作為獨立的圖片渲染應用程式發布。 \n 2017年 \n 1.引入3D互連以簡化不同文件類型與SolidWorks的協作。 \n 2.Asset Publisher具有 ground plane （地層）和 magnetic mates （磁配對），可輕鬆實現 \n 3.大型裝配布局。 \n 4.引入了 Advanced Hole （高級孔）功能。 \n 5.增強了Wrap功能，可在更多類型的面選擇上創建幾何體。 \n 6.陰影草圖輪廓增強選擇和操作功能。 \n 2018年 \n 1.SolidWorks啟動時的歡迎對話框。 \n 2.用戶設置現在可以登錄。新發布的在線許可也可以遵循此登錄，在需要在多台計算機上 \n 3.使用SolidWorks時為用戶提供另一種選擇。 \n 4.選擇幾何圖形，允許用戶忽略幾何圖形並在其上選擇其他實體。 \n 5.引入了標籤和插槽功能，自動執行以前在鈑金和焊件中常用的手動方法。 \n 6.能夠鏡像3D草圖中的實體。 \n 7.首次使用筆，觸屏和基於手勢的草圖繪製功能。 \n 8.引入拓撲仿真分析。 \n 2019年 \n 1.顯著改進裝配性能。 \n 2. Silhouette defeature 命令，簡化了從模型中刪除細節以提高性能或保護智慧財產權的過程。 \n 3.能夠按狀態對mates進行分組。 \n 4.部分倒角和圓角。 \n 5.將圖像轉換為網格/凹凸貼圖，從圖像文件創建實際的3D幾何體。 \n \n 直至現今，SolidWorks 自成立以來一直在不斷優化 3D CAD 操作。強大的新功能和新產品的發布，使SolidWorks真正用行動證明他們仍然保持著最初使命：使CAD軟體更易於使用，可以讓每個人都能夠輕鬆使用。 \n', 'tags': '', 'url': 'solidwork開發緣起.html'}, {'title': 'NX開發緣起', 'text': '\n 1960年 \n 由 McDonnell Douglas Automation \xa0 公司成立。 \n 1976年， \n 收購了Unigraphics CAD/CAE/CAM系統的開發商——United Computing公司，UG的雛形問世。 \n 1983年 \n UG 正式 上市。 \n 1986年 \n Unigraphics 吸取了業界領先的、為實踐所證實的實體建模核心—— Parasolid 的部份功能。 \n 1989年 \n Unigraphics宣布支持 UNIX 平台及開放系統的結構，並將一個新的與STEP標準兼容的三維實體建模核心 Parasolid 引入 UG 。 \n 1990年 \n Unigraphics作為McDonnell Douglas（波音飛機公司）的機械CAD/CAE/CAM的標準。 \n 1991年 \n Unigraphics開始了從 CAD/CAE/CAM 大型機版本到工作站版本的轉移。 \n 1993年 \n \n Unigraphics引入 複合建模 的概念，可以實體建模、曲線建模、框線建模、半參數化及參數化建模融為一體。 \n 1995年 \n Unigraphics 首次 發布了 Windows NT 版本。 \n 1996年 \n Unigraphics發布了能自動進行干涉檢查的高級裝配功能模塊、最先進的 CAM模塊 以及具有A類曲線造型能力的工業造型模塊：它在全球迅猛發展，占領了巨大的市場份額，已經成為高端及商業CAD/CAE/CAM應用開發的常用軟體。 \n 1997年 \n Unigraphics新增了包括 WAVE （幾何連結器）在內的一系列工業領先的新增功能。WAVE這一功能可以定義、控制、評估產品模板，被認為是在未來幾年中業界最有影響的新技術。 \n 2000年 \n Unigraphics發布了新版本的 UG17 ， 最新版本 的，是UGS成為 工業界第一個 可以裝載包含深層嵌入「 基於工程知識 」（KBE）語言的世界級MCAD軟體產品的供應商。 \n 2001年 \n Unigraphics發布了新版本 UG18 ，新版本對舊版本的對話框進行了調整，使得在最少的對話框中能完成更多的工作，從而簡化了設計。 \n 2002年 \n Unigraphics發布了 UG NX1.0.新版本 繼承了UG18的優點，改進和增加了許多功能，使其功能更強大，更完美。 \n 2003年 \n Unigraphics發布了新版本 UG NX2.0 \xa0 。新版本基於最新的行業標準，它是一個全新支持PLM的體系結構。EDS公司同其主要客戶一起，設計了這樣一個先進的體系結構，用於支持完整的產品工程。 \n 2004年 \n Unigraphics發布了新版本的 UG NX3.0 ，它為用戶的產品設計與加工過程提供了數字化造型和驗證手段，。它針對用戶的虛擬產品的設計和工藝設計的需要，提供經過實踐驗證的解決方案。 \n 2005年 \n Unigraphics發布了新版本的 UG NX4.0. 它是嶄新的NX體系結構，使得開發與應用更加簡單和快捷。 \n 2007年 \n UGS公司發布了 NX 5.0 \xa0 – NX的下一代數字產品開發軟體，幫助用戶以更快的速度開發創新產品，實現更高的成本效益。 \n 2008年 \n 6月，Siemens PLM Software發布 UG NX 6.0 ，建立在新的同步建模技術基礎之上的NX 6將在市場上產生重大影響。同步建模技術的發布標誌著NX的一個重要里程碑，並且向 MCAD 市場展示 Siemens 的鄭重承諾。 NX 6將為我們的重要客戶提供極大的生產力提高。 2009年 \n 10月 – 西門子工業自動化業務部旗下機構、全球領先的產品生命周期管理（PLM）軟體與服務提供商Siemens PLM Software 宣布推出其旗艦數字化產品開發解決方案NX 軟體的最新版。 UG NX 7.0 引入了「 HD3D 」（ 三維精確描述 ）功能，即一個開放、直觀的可視化環境，有助於全球產品開發團隊充分發掘PLM信息的價值，並顯著提升其制定卓有成效的產品決策的能力。此外， NX 7.0 還 新增了同步建模技術 的增強功能。修復了很多6.0所存在的漏洞，穩定性方面較6.0有很大的提升。 \n 2010年 \n 5月20日– Siemens PLM Software在 上海世博會 發布了功能增強的NX7最新版本（ UG NX 7.5 ），NX GC 工具箱將作為NX 7最新版本的一個應用模塊與NX 7一起同步發布。NX GC 工具箱是為滿足中國用戶對NX特殊需求推出的本地化軟體工具包。在符合國家標準（GB）基礎上，NX GC 工具箱做了進一步完善和大量的增強工作。 \n 2011年 \n 9月 - Siemens PLM Software發布了 UG NX 8.0 \n 2012年 \n 10月 - Siemens PLM Software發布了 UG NX 8.5 \n 2013年 \n 10月- Siemens PLM Software發布了 UG NX 9.0 \n 2014年 \n 8月- Siemens PLM Software發布了 UG NX 10.0 \n 2016年 \n 8月- Siemens PLM Software發布了 UG NX 11.0 \n 2017年 \n 10月- Siemens PLM Software發布了 UG NX 12.0 \n', 'tags': '', 'url': 'NX開發緣起.html'}, {'title': 'Inventor開發緣起', 'text': '\n Inventor \n 是美國 AutoDesk 公司推出的一款三維可視化實體模擬軟件 Autodesk Inventor Professional （AIP），目前已推出最新版本AIP2019。同時還推出了iphone版本，在 app store 有售。 Autodesk Inventor Professional包括Autodesk Inventor三維設計軟件；基於AutoCAD平台開發的二維機械製圖和詳圖軟件AutoCAD Mechanical；還加入了用於纜線和束線設計、管道設計及PCB IDF文件輸入的專業功能模塊，並加入了由業界領先的ANSYS技術支持的 FEA 功能，可以直接在Autodesk Inventor軟件中進行應力分析。 在此基礎上，集成的數據管理軟件Autodesk Vault-用於安全地管理進展中的設計數據。 \n 1 應用 \n 由於Autodesk Inventor Professional集所有這些產品於一體，因此提供了一個 無風險 的 二維 到 三維 轉換路徑，您能以自己的進度轉換到三維，保護的二維圖形和知識投資，並且清楚地知道自己在使用目前市場上 DWG 兼容性最強的平台。Autodesk Inventor Professional軟件是一套全面的設計工具，用於創建和驗證完整的數字樣機；幫助製造商減少物理樣機投入，以更快的速度將更多的創新產品推向市場。 \n 為 適用於設計流程的理想工具 及 滿足設計需求的專用工具 \n 2 運動仿真 \n 借助Autodesk Inventor Professional的運動仿真功能，用戶能了解機器在真實條件下如何運轉，而能節省花費在構建物理樣機上的成本、時間和高額的諮詢費用。 \n 用戶可以據實際工況添加載荷、摩擦特性和運動約束，然後通過運行仿真功能驗證設計。 借助與應力分析模塊的無縫集成，可將工況傳遞到某一個零件上，來優化零部件設計。 \n 3 增強功能仿真 \n 借助 Autodesk Inventor Professional 的 運動仿真功能 ，用戶能了解機器在真實條件下如何運轉，而能節省花費在構建物理樣機上的成本、時間和高額的諮詢費用。 \n 用戶可以據實際工況添加載荷、摩擦特性和運動約束，然後通過運行仿真功能驗證設計。 借助與應力分析模塊的無縫集成，可將工況傳遞到某一個零件上，來優化零部件設計。 \n \n （增強功能） 有輸出到應力分析中、 約束轉換、 載荷定義、可視化、點軌跡、圖示器、模型簡化、薄壁件處理、將分析數據導入ANSYS。 \n 4 布管設計 \n Autodesk Inventor? Professional可以幫助用戶節約創建管材、管件和軟管所需要的時間。 \n 使用Autodesk Inventor? Professional中規範的布管工具來選擇合適的配件，確保管路符合最小和最大長度、舍入增量和彎曲半徑這三類設計規則。 \n 5 線束設計 \n 從電路設計軟件（包括 AutoCAD Electrical 軟件）導出的導線表，Autodesk Inventor? Professional 可以接續進行電纜和線束設計。 \n 將電纜與線束（包括軟質排線）集成到數字樣機中，用戶可以準確計算路徑長度，避免過小的彎曲半徑，並確保電氣零部件與機械零部件匹配，從而節約大量時間和成本。 \n 6 CAD集成 \n Autodesk Inventor Professional能夠幫助用戶充分利用原有的AutoCAD 技能和DWG 設計數據，從而體驗數字樣機帶來的種種優勢。 \n Autodesk Inventor Professional集成了業界領先的二維和三維設計功能。 無需使用 數據轉換器 ，利用DWG TrueConvert就能直接讀寫DWG文件，同時還能保持與 三維模型 的關聯性。 \n 借助Autodesk Inventor Professional，用戶可以輕鬆訪問原有的二維信息，重複利用寶貴的設計數據。 此外，由於用戶可以將Inventor 的工程圖保存為DWG 文件，因此他們可以將從數字樣機中獲得的分析結果與那些使用AutoCAD 軟件的合作夥伴及供應商共享。 從三維零件和裝配設計中生成的視圖，如示意圖和工廠佈置圖等，也可以與AutoCAD 數據相集成。 用戶可以通過插入新的三維設計視圖來更新原有的二維工程圖，以降低升級現有設備的成本。 \n 7 零件設計 \n Inventor 可以幫助設計人員更為輕鬆地重複利用已有的設計數據，生動地表現設計意圖。借助其中全面關聯的模型，零件設計中的任何變化都可以反映到裝配模型和工程圖文件中。由此，設計人員的工作效率將得到顯著提高。 \n Inventor 可以使經常使用的自定義特徵和零件的設計標準化和系列化，從而提高客戶的生產效率。 利用Inventor 中的iPart技術，設計公司可以輕鬆設置智能零件庫，以確保始終以同種方式創建常用零件。 \n 8 鈑金設計 \n Autodesk Inventor 能夠幫助用戶簡化複雜鈑金零件的設計。 \n Inventor 中的數字樣機結合了加工信息（如沖壓工具參數和自定義的折彎表）、精確的鈑金折彎模型以及展開模型編輯環境。 在展開模型編輯環境中，製造工程師可以對鈑金展開模型進行細微的改動。 因此能夠幫助用戶提高設計鈑金零件的效率。 \n \n 9 裝配設計 \n Inventor將設計加速器與易於使用的裝配工具相結合，使用戶可以確保裝配設計中每一個零部件的安裝正確。 \n 精確地驗證干涉情況和各種屬性，以便一次性創建高質量的產品。 Inventor提供的強大工具可有效控制和管理大型裝配設計中創建的數據，因此用戶只需專心工作在所關心的部分零部件上。 \n 10 工程圖 \n Autodesk Inventor 中包含從數字樣機中生成工程設計和製造文檔的全套工具。這些工具可減少設計錯誤，縮短設計交付時間。 \n Inventor 中的自動創建視圖功能和繪圖工具將工程圖的繪製效率提高到了新的水平。 \n 此外，Inventor還支持所有主流的繪圖標準，與 三維模型 的完全關聯（在出現設計變更時，工程圖將同步更新），以及 DWG 輸出格式，因此是創建和共享DWG工程圖的理想選擇。 \n 11 數據管理 \n Inventor 使設計數據可以高效、安全的進行交換，支持不同工程相關方（包括工業設計、產品設計和製造）之間的協作。 \n 這種功能支持設計工作組管理和跟踪一個數字樣機中的所有零部件設計，幫助他們更出色地重用關鍵的設計數據、管理BOM 表、及早實現製造團隊與客戶間的協作。 \n 通過一系列全面的本地格式轉換器， Inventor具有了出色的互操作性。 在那些有部分三維數據來源於其它CAD系統的項目中，企業也可以積極參與，並滿足客戶對於其它本地格式 三維模型 的要求。 \n \xa0 \n 12 自動化 \n Inventor 可以幫助用戶從三維軟件投資中獲得最大回報。Inventor API（應用編程接口）可以自動化常用的操作，並按照設計標準和工程流程實現特有流程的自動化。 \n 借助可編輯的樣式，用戶可以創建符合標準的工程圖，向資源中心發布自定義的零件，以確保設計者在設計中使用合適的零件，從而提高設計速度和工作效率。 \n 13 學習資源 \n Inventor 提供了豐富的學習和參考資源，旨在幫助用戶掌握使用技巧，充分發揮三維設計環境的優勢。 \n 借助Inventor ，用戶可以學習新技巧，查找關於操作流程或工具的信息，獲得最新提示和訣竅。 \n 14版本歷史 \n Autodesk Inventor R1 Mustang 1999/9/20 Autodesk Inventor R2 Thunderbird 2000/3/1 Autodesk Inventor R3 Camaro 2000/8/1 Autodesk Inventor R4 Corvette 2000/12/1 Autodesk Inventor R5 Durango 2001/9 /17 Autodesk Inventor R6 Viper 2002/10/15 Autodesk Inventor R7 Wrangler 2003/4/18 Autodesk Inventor R8 Cherokee 2003/10/15 Autodesk Inventor R9 Crossfire 2004/7/15 Autodesk Inventor R10 Freestyle 2005/4/6 Autodesk Inventor R11 Faraday 2006/4/6 Autodesk Inventor 2008 Goddard 2007/4/11 Autodesk Inventor 2009 Tesla 2008/4/16 Autodesk Inventor 2010 Hopper 2009/2/27 Autodesk Inventor 2011 Sikorsky 2010/3/26 Autodesk Inventor 2012 Brunel 2011/3/22 Autodesk Inventor Professional 2013 發佈於2012 Autodesk Inventor Professional 2014 發佈於2013 Autodesk Inventor Professional 2013 發佈於2012-06-25 Autodesk Inventor Professional 2012 發佈於2011-04-15 Autodesk Inventor Professional 2011 發佈於2010-04-23 Autodesk Inventor Professional 2010 發佈於2009-04-26 \n', 'tags': '', 'url': 'Inventor開發緣起.html'}, {'title': '各繪圖軟件套件安裝及設定流程', 'text': '繪圖軟體安裝及基本設定 \n nx12及nx3下載點和資料參考點:\xa0 http://mde.tw/cad2019/content/NX.html \n solidwork下載點和資料參考點: \xa0 http://mde.tw/cad2019/content/Solidwo... \n VirtualBox下載點:\xa0 https://briian.com/5690/ \n pro/e官方網站:\xa0 https://www.ptc.com/en/products/cad/p... \n pro/e試用版載點: \xa0 https://www.ptc.com/tw/products/cad/c... \n inventor試用版載點: \xa0 https://www.autodesk.com/products/inv... \n autodesk 官方網站:\xa0 https://www.autodesk.com.tw/ \n 套件安裝和設定流程操作影片 : \n', 'tags': '', 'url': '各繪圖軟件套件安裝及設定流程.html'}, {'title': 'week15-18', 'text': 'week15 \n 第15周影片查驗: \n \n 心得: \n 在這幾周我學到了自己編譯繪圖軟體，模擬軟體webots和v-rep和nx等的軟體，雖然要適應新的軟體很難但是我還是盡量的依靠電子書和網路上的教程達到了，在一開始使用webots時非常辛苦，必須去尋找物件設定的節點和如何在軟體裡面建模，在v-rep也是如此，而且v-rep更加的困難，他的建模方式並沒有像webots一樣設定好所以使用起來困難重重，但是它的彈性是比較大的，希望在之後可以從這兩套軟體中分別找出我們比較優勢的地方並且把它給發揮並且統整起來用作對軟體模擬更加好用的工具或選項。 \n nx與solvespace圖檔導入webots  : \n nx: \n nx導入webots時能夠分割各零件，但是導入後分割的零件有可能切割過細，必須將一組的零件個別整合再一起，也就是將各零件children中的shape放入要組合的主要零件的children底下。 \n solvespace: \n 導入後零件不會個別分割開來，會以組合之後的形狀直接導入webots中，雖然導入方便快速但是有無法切割的缺點。 \n 操作影片: \n \n week16 \n 心得: \n 繪製solvespace零件的部分可能是本次查驗比較困難的部分，轉出stl和wrl之後必須要導入webots和v-rep之中，若要真實的達到模擬，那必須要做更多的程式修改，才能夠達到我們對連接軸的驅動和加入馬達達到輸出馬力的部分，這部分是本次查驗之中比較難的延伸部分，如果能夠對這部分深入並且達成，那會是比較值得去開發的一塊區域。 \n 操作影片: \n \n week17 \n 操作影片: \n \n 尺寸標註: \n \n 心得: \n 要做到能夠動的車子模擬是非常困難的，現階段我們只能夠對車子做外型上的變更，在WEBOTS上能夠做到的移動和跨過障礙物的動作但是還是必須理解內容才有辦法繼續設定。 \n 輪軸設定及碰撞設定影片: \n', 'tags': '', 'url': 'week15-18.html'}, {'title': 'note', 'text': '1. \n Question: 修正Commitg 失敗無法push的bug，如何解除此bug? \n Qwestion image: \n \n \n Answer:利用 強制推送 的指令使其能夠覆蓋掉之前不必要的分支，也就是利用git push -f指令，在單人時可以採用這項方式，但是在多人協同時若使用會發生將上一個commit的人的資料給覆蓋的情況，所以要小心使用，若萬一真的覆蓋掉了就必須請另一端的同事以git push -f之指令重新推送才有辦法解決此問題。 \n 2. \n Question:若在別台電腦開啟putty但找不到github.com怎麼處理? \n Answer: \n 在老師issue中ssh教學步驟的step2有putty_home.zip壓縮檔 ( 圖一) 下載下來後用regedit指令在黑窗中開啟登錄編輯模式，並且在其中找到user開頭的目錄並且找到內部儲存github.com的資料夾，匯出之後會得到putty_home.reg( 圖二) 並且去執行putty.exe在其中就會看到github.com了按下後照著我的步驟 (圖三) 就可以成功了。 \n 圖一: \n \n 圖二: \n \n 圖三: \n \n \n 3. \n 正向 git pull request : 當組員從組長的帳號中提取新版本的commitu,也就是git pull 的時候我們稱做正向的git pull request而他指指另也就是git pull 組長分組帳號網址，當組員在push必且創建new pull request時也必須通過這樣的機制請組長同意pull request才能夠將組員的資料作合併。 \n 逆向git pull request : 反向的pull\xa0 request則是在組員自己的帳號下創建new pull request並且輸入指令git pull github.com/組員/組別/compare/master...組長; master這樣一來就可以將組長帳號下的提交版本反向的提到組員帳號再經由組圓自己同意new pull request和git push後就可以得到最新的版本。 \n', 'tags': '', 'url': 'note.html'}, {'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n ======= \n 1.將solvespace打開 2.將輪胎及輪胎的軸心繪製 (1)運用C快捷鍵繪製一圓作為輪胎 (2)運用New Group中的sketh in new workplace(快捷鍵為shift+w)進入草圖中所選定的基準面 (3)在草圖中運用上述C快捷鍵繪製一圓作為輪軸 \n \xa0 \n \n \n >>>>>>> 847d9a6d40ff48b4b37d706d87bb8e9ecd94d0c4', 'tags': '', 'url': 'Develop.html'}]};
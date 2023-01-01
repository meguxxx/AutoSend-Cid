function hook(v)
    if v[0] == "OnConsoleMessage" then
        if v[1]:find("into the Donation Box") then
            if v[1]:find("<") then
                log("Fake Donation Detected!\nPlayer Name : "..(v[1]:gsub("`.",""):match("<(.+)>")))
            else
                name = v[1]:gsub("`.",""):match("%[%[(.+) places")
                amount = v[1]:gsub("`.",""):match("places (%d+)")
                item = v[1]:gsub("`.",""):match("(.+) into")
                dl = v[1]:gsub("`.",""):match()
                
            end
        end
    end
end